import { Down, Up } from '@icon-park/react'
import Logo from '../assets/logo.svg'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const recipeBook = ['About', 'Careers', 'Contact us', 'Feedback']
const legal = ['Terms', 'Conditions', 'Cookies', 'Copyright']
const follow = ['Facebook', 'Twitter', 'Instagram', 'Youtube']

const Footer = () => {
    const [isRecipeBook, setRecipeBook] = useState(false);
    const [isLegal, setLegal] = useState(false);
    const [isFollow, setFollow] = useState(false);
    return (
        <div className='flex flex-col items-center justify-center bg-[#F9F9F9] text-[#7F7F7F] md:flex-row'>
            <div className='flex flex-col m-10 flex-1'>
                <img src={Logo} alt='' className='w-52' />
                <p>"On the other hand, we denounce with righteous indigation and dislike men who are so degulied and demoralized by the charms of the pleasure of the moment"</p>
            </div>
            <div className='hidden items-center justify-evenly flex-1 md:flex'>
                <div className='flex flex-col gap-2'>
                    <span className='text-black font-medium'>Recipe Book</span>
                    {recipeBook.map((data, i) => <span key={i}>{data}</span>)}
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-black font-medium'>Legal</span>
                    {legal.map((data, i) => <span key={i}>{data}</span>)}
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='text-black font-medium'>Follow</span>
                    {follow.map((data, i) => <span key={i}>{data}</span>)}
                </div>
            </div>
            <div className='flex flex-col md:hidden px-2 divide-y-2 w-full'>
                <div className='flex flex-col items-center w-full'>
                    <button className='py-2 w-full flex justify-between items-center text-black font-medium' onClick={() => setRecipeBook(!isRecipeBook)}>Recipe Book{isRecipeBook ? <Up /> : <Down />}</button>
                    {isRecipeBook && <div className='flex flex-col w-full  items-start animate-fadeInAnimation' >
                        {recipeBook.map((data,i)=><span key={i} className='mx-10'>{data}</span>)}
                    </div>}
                </div>
                <div className='flex flex-col items-center w-full'>
                    <button className='py-2 w-full flex justify-between items-center text-black font-medium' onClick={() => setLegal(!isLegal)}>Legal{isLegal ? <Up /> : <Down />}</button>
                    {isLegal && <div className='flex flex-col items-start w-full animate-fadeInAnimation' >
                        {legal.map((data,i)=><span key={i} className='mx-10'>{data}</span>)}
                    </div>}
                </div>
                <div className='flex flex-col items-center w-full'>
                    <button className='py-2 w-full flex justify-between items-center text-black font-medium' onClick={() => setFollow(!isFollow)}>Follow{isFollow ? <Up /> : <Down />}</button>
                    {isFollow && <div className='flex flex-col items-start w-full animate-fadeInAnimation' >
                        {follow.map((data,i)=><span key={i} className='mx-10'>{data}</span>)}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Footer