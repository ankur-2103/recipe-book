import { HamburgerButton, Search } from '@icon-park/react'
import Logo from '../assets/logo.svg'
import { useEffect, useState } from 'react'
import Auth from './Modal/Auth';
import Modal from './Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../misc/firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { setSaveRecipes } from '../slice/userSlice';
import { getAutoCompleteRecipes, getRecipesByfilter } from '../api/api';
import { setSearchRecipes } from '../slice/recipesSlice';

// This file is used for displaying navbar

// get user name first two letters of first two words
export const getNameInitials = (name) => {
  const splitName = name.toUpperCase().split(' ');
  if (splitName.length > 1) {
    return splitName[0][0] + splitName[1][0];
  }
  return splitName[0][0];
}

const Navbar = () => {

  // state for displaying data
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [option, setOption] = useState('login');
  const close = () => setIsOpen(false);
  const userInfo = useSelector(state => state.user.info);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryOptions, setSearchQueryOptions] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // get search options according to search options
  useEffect(() => {
      const getData = async () => {
          const res = await getAutoCompleteRecipes(searchQuery);
          setSearchQueryOptions(res.data);
      }

      if (searchQuery.length) {
          getData();  
      }
  }, [searchQuery])

  // on search option click
  const handleSearch = async () => {
    const res = await getRecipesByfilter({ query:searchQuery, number:50 });
    if (res) {
      dispatch(setSearchRecipes(res.data.results));
    }
    setSearchQuery('');
    setSearchQueryOptions(null);
    navigate('/search')
  }

  // handle user logout
  const handleLogOut = async () => {
    setMenu(false); 
    await signOut(auth);
    setSaveRecipes(null);
  } 

  return (
    <div className="mx-auto flex max-w-7xl justify-between lg:px-6 md:shadow-md md:mt-2 md:rounded-xl ">
      <img src={Logo} alt='' className=' w-18 h-18 md:w-24 md:h-16 mx-2' />
      <div className='flex items-center w-full gap-2 mx-2 justify-end' >
        <div className="relative rounded-md shadow-sm max-w-fit">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full md:w-96 rounded-md border-0 py-1.5 pl-2 pr-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
            placeholder="Search"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-1 flex items-center rounded-r-md">
            <button className="bg-gray-200 p-1 border-r-10 rounded-r-md" onClick={handleSearch}><Search size="18" /></button>
          </div>
          {searchQueryOptions && <div className='flex flex-col divide-y-2 w-full divide-[#f7f7f7] my-2 absolute top-8 z-10 bg-[#e8e8e8] rounded-lg'>
            {searchQueryOptions.map((data) => 
              <span className='px-2 py-1 font-medium hover:bg-white truncate' key={data.id} onClick={handleSearch}>{data.title}</span>
            )}
          </div>}
        </div>
        <div className='relative  flex items-center justify-end'>
          {!userInfo  ? <></> :
            userInfo.avatar ?
              <img
                className="rounded-full w-12 h-12 ring-2 ring-white cursor-pointer"
                src={userInfo.avatar && userInfo.avatar}
                alt=""
                onClick={()=>setMenu(!menu)}
              />
            :
            <span className='flex justify-center items-center bg-[#e8e8e8] rounded-full w-12 h-12 ring-2 ring-white cursor-pointer' onClick={()=>setMenu(!menu)}>{getNameInitials('as')}</span>
          }
          <span onClick={()=>setMenu(!menu)}><HamburgerButton size={25} className={`cursor-pointer md:hidden ${userInfo && 'hidden'}`}/></span>
          {menu &&
              <span className='absolute flex flex-col top-12 z-10 w-36 rounded-xl bg-[#e8e8e8] divide-y-2 divide-[#f8f8f8]'>
              {userInfo ?
                <>
                  <NavLink className='px-4 py-2 hover:bg-white text-center text-lg cursor-pointer' onClick={() => setMenu(false)} to='/'>Home</NavLink>
                  <NavLink className='px-4 py-2 hover:bg-white text-center text-lg cursor-pointer' onClick={() => setMenu(false)} to='/profile'>Profile</NavLink>
                  <NavLink className='px-4 py-2 hover:bg-white text-center text-lg cursor-pointer' onClick={()=>setMenu(false)} to='/saved-recipes'>Saved recipes</NavLink>
                  <span className='px-4 py-2 hover:bg-white text-center text-lg cursor-pointer' onClick={() => { handleLogOut(); }}>Logout</span>
                </>
                :
                <>
                  <NavLink className='px-4 py-2 hover:bg-white text-center text-lg cursor-pointer' onClick={() => setMenu(false)} to='/'>Home</NavLink>
                  <span className='px-4 py-2 hover:bg-white text-center text-lg cursor-pointer' onClick={() => { setMenu(false); setIsOpen(true); setOption('login') }}>Login</span>
                  <span className='px-4 py-2 hover:bg-white text-center text-lg cursor-pointer' onClick={() => { setMenu(false); setIsOpen(true);  setOption('sign in')}}>Sign in</span>
                </>
              }
              </span>
          }
        </div>
        {!userInfo && <span className='gap-2 hidden md:flex'>
          <button onClick={() => setIsOpen(!isOpen)} className='bg-[#ff642f] text-white px-2 py-1 rounded-lg'>Login</button>
          <button onClick={() => setIsOpen(!isOpen)}>Sign In</button>
        </span>}
        <Modal isOpen={isOpen}><Auth close={close} option={option}/></Modal>
        </div>
    </div>    
  )
}

export default Navbar