import React from 'react'

export default function CloseButton({ handleClose }) {

   return (
      <button>
        <img src='/icons/close.svg' className='absolute right-2 top-2' onClick={handleClose} />
      </button>
   )
}
