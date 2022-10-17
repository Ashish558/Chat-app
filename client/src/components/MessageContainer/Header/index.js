import React from 'react'
import { useDispatch } from 'react-redux'
import { updateIsMessagesActive } from '../../../redux/slices/chat'

export default function Header({ roomName }) {

   const dispatch = useDispatch()

   return (
      <div className='py-2 border-b bg-white-light flex items-center'>
         <div className='ml-1 md:hidden'>
            <button className='w-5 h-5 flex items-center justify-center rounded-full bg-white-dark'
               onClick={() => dispatch(updateIsMessagesActive({ active: false }))}>
               <img src='/icons/back.svg' />
            </button>
         </div>
         <div className='text-center  grow'>
            <p className='text-xl font-semibold capitalize'>
               {roomName}
            </p>
         </div>
      </div>
   )
}
