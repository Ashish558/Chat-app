import React from 'react'

export default function ModalOverlay({ handleClose }) {

   return (
      <div className='absolute top-0 left-0 w-full h-full bg-overlay z-0' onClick={handleClose}>
      </div>
   )
}
