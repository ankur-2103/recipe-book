import { Close, Google, Keyhole, Mail, User } from '@icon-park/react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAdditionalUserInfo, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, database } from '../../misc/firebase';
import { ref, serverTimestamp, set } from 'firebase/database';
import { setUser } from '../../slice/userSlice';
import { useDispatch } from 'react-redux';

const Auth = ({option='login', close}) => {

    const [type, setType] = useState(option);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch();

    const handleTypeChange = () => {
        setType((val) => {
            if (val === 'login') {
                return 'sign in';
            } else {
                return 'login';
            }
        })
    }

    const handleClick = async () => {
        if ((type === 'login' && !name.length) && !email.length && !pass.length) return;

        try {
            if (type === 'login') {
                await signInWithEmailAndPassword(auth, email, pass);
            } else {
                await createUserWithEmailAndPassword(auth, email, pass).then(async (res) => {
                    await set(ref(database, `profiles/${res.user.uid}`), {
                        name,
                        createdAt: serverTimestamp()
                    }).catch((err)=>console.log(err))
                })
            }
            close()
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogle = async () => {
        try {
            const credentials = await signInWithPopup(auth, new GoogleAuthProvider).catch((err) => console.log(err));
            const userMeta = getAdditionalUserInfo(credentials);
            if (userMeta.isNewUser) {
                await set(ref(database, `/profiles/${credentials.user.uid}`), {
                    name: credentials.user.displayName,
                    createdAt: serverTimestamp()
                })
            }
            close()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='relative flex flex-col w-96 h-96 bg-white rounded-xl p-4 gap-3 items-center'>
            <Close size={20} className='absolute right-4 top-4 cursor-pointer' onClick={close}/>
            <span className='text-2xl w-full font-medium text-left capitalize'>{type.toUpperCase()}</span>
            <div className='flex flex-col gap-2 w-full'>

            <div className={`relative w-full ${type==='login' && 'hidden'}`}>
                <User className='absolute top-3 left-2'/>
                 <input type="string" name="search" id="search" value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded-md border-0 py-2 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6 " placeholder="Name"/>
            </div>
            <div className='relative w-full'>
                <Mail className='absolute top-3 left-2'/>
                 <input type="email" name="search" id="search" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-md border-0 py-2 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6 " placeholder="Email"/>
            </div>
            <div className='relative w-full'>
                <Keyhole className='absolute top-3 left-2'/>
                 <input type="password" name="search" id="search" value={pass} onChange={(e)=>setPass(e.target.value)} className="w-full rounded-md border-0 py-2 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6 " placeholder="Password"/>
            </div>
            </div>
            <button className='bg-[#FF642f] text-white px-8 py-2 rounded-lg capitalize' onClick={handleClick}>{type}</button>
            <span>or with</span>
            <div className='relative'>
                <Google className='absolute top-3 left-2'/>
                <button className='bg-gray-200 text-black font-medium px-8 py-2 rounded-lg capitalize' onClick={handleGoogle}>Google</button>
            </div>
            {type==='login' ? <span>Don't have an account <span className='text-[#FF642F] font-medium cursor-pointer' onClick={handleTypeChange}>Sign In</span></span>   : <span>Already have an account <span className='text-[#FF642F] font-medium cursor-pointer' onClick={handleTypeChange}>Login</span></span>}
        </div>
    )
}

export default Auth