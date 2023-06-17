import { Search } from '@icon-park/react'
import Logo from '../assets/logo.svg'
import { useState } from 'react'
import Auth from './Modal/Auth';
import Modal from './Modal/Modal';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  console.log(useSelector(state => state.user))

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
          />
          <div className="absolute inset-y-0 right-1 flex items-center rounded-r-md">
            <button className="bg-gray-200 p-1 border-r-10 rounded-r-md"><Search theme="outline" size="18" fill="#333"/></button>
          </div>
        </div>
          {/* <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          /> */}
        <button onClick={() => setIsOpen(!isOpen)}>Login</button>
        {}
        <Modal isOpen={isOpen}><Auth close={close}/></Modal>
        </div>
    </div>    
  )
}

export default Navbar