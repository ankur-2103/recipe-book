import { getDownloadURL, ref, uploadBytes  } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { auth, database, storage } from '../misc/firebase';
import { set, ref as dbref, update } from 'firebase/database';
import Modal from '../components/Modal/Modal';
import AvatarEditor from 'react-avatar-editor';
import Loading from './Loading';
import {  sendPasswordResetEmail } from 'firebase/auth';
import Auth from '../components/Modal/Auth';

const fileInputTypes = '.png, .jpeg, jpg';
const acceptedFileType = ['image/png', 'image/jpeg', 'image/jpg'];
const isValidFile = (file) => acceptedFileType.includes(file.type);
const getBlob = (canvas) => {
    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
        if (blob) {
            resolve(blob);
        } else {
            reject(new Error('File process error'));
        }
        })
    })
}


const Profile = () => {
    
    const userInfo = useSelector(state => state.user.info);
    const isLoading = useSelector(state => state.user.isLoading);
    const avtarEditorRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [img, setImg] = useState(false);
    const [name, setName] = useState();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
        } else if(!userInfo && isAuthOpen) {
            setIsAuthOpen(true)
        } else {
            setIsAuthOpen(true)
        }

    }, [userInfo, isAuthOpen])
    
    useEffect(() => {
        if (userInfo && userInfo.name !== name ) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }, [userInfo, name]);
    
    const onAvatarUpload = async () => {
        try {
            const canvas = avtarEditorRef.current.getImageScaledToCanvas();
            const blob = await getBlob(canvas);
            
            const storageRef = ref(storage, `/profile/${userInfo.uid}/avatar`)
            
            await uploadBytes(storageRef, blob, {
                cacheControl: `public, max-age=${3600 * 24 * 3}`,
            })

            
            const downloadUrl = await getDownloadURL(storageRef);
            await set(dbref(database, `profiles/${userInfo.uid}/avatar`), downloadUrl).catch(err=>console.log(err))
            
            setIsOpen(false)
        } catch (error) {
            console.log(error);
        }
    }

    const onFileInputChange = (e) => {
        const currFiles = e.target.files;
        const file = currFiles[0];
        if (isValidFile(file)) {
            setImg(file);
            setIsOpen(true);
        } 
    }

    const updateProfile = async () => {
        try {
            const updates = {}
            updates[`/profiles/${userInfo.uid}/name`] = name;
    
            update(dbref(database), updates);            
            setDisabled(true);
        } catch (error) {
            console.log(error)
        }
    }


    return isLoading ? <Loading /> : (
        <>

            {userInfo ? 
                    <div className='xl:mx-auto max-w-7xl flex my-4 flex-col gap-8 mx-10'>
                        <span className='flex flex-col gap-2 items-center w-fit'>
                            <img
                                className="rounded-full w-64  h-64 ring-2 ring-white cursor-pointer"
                                src={userInfo.avatar ? userInfo.avatar : 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                                alt=""
                            />
                            <label className='w-fit bg-[#e8e8e8] ring-2 px-2 py-1 text-center ring-black rounded-lg'>
                                Select new avatar
                                <input id='avatar-upload' type='file' className='hidden' accept={fileInputTypes} onChange={onFileInputChange}/>
                            </label>
                        </span>
                            <input type="text" className="w-full md:w-96 rounded-md border-0 py-1.5 pl-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>    
                        <button className='w-fit px-4 py-2 ring-2 ring-black rounded-lg' onClick={()=>sendPasswordResetEmail(auth, userInfo.email)}>Change password</button>
                        <button className='w-fit px-4 py-2 bg-[#ff642f] text-white rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' disabled={disabled} onClick={updateProfile}>Save changes</button>
                        <Modal isOpen={isOpen}>
                            <div className='flex flex-col bg-white rounded-lg px-4 py-4 gap-4'>
                                <span className='text-lg font-medium'>Adjust and upload new avatar</span>
                                {img && (
                                    <AvatarEditor className='ring-2 ring-[#7f7f7f] rounded-lg' image={img} width={250} height={250} border={10} borderRadius={50} color={[255, 255, 255, 0.6]} scale={1.2} rotate={0} ref={avtarEditorRef} />
                                )}
                                <button onClick={onAvatarUpload} className='ring-2 ring-black rounded-lg'>Upload</button>
                            </div>
                        </Modal>
                    </div>
                :   <>
                        <Loading/>
                        <Modal isOpen={isAuthOpen}><Auth close={() => setIsAuthOpen(false)} /></Modal>
                    </> 
                }        
                    
        </>
    )
}

export default Profile