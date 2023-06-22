import React from 'react'
import { createPortal } from 'react-dom';

/*
    This file is used for creating a modal
*/

const Modal = ({ isOpen, children }) => {
    
    if (!isOpen) return null;

    return createPortal(
        <div className='flex items-center justify-center fixed z-[2] w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)] p-4 text-black]' >
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export default Modal