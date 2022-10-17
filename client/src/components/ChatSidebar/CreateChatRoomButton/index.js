import React from 'react'
import { useDispatch } from 'react-redux'
import { updateCreateRoomModal } from '../../../redux/slices/modals'

export default function CreateChatRoomButton() {

   const dispatch = useDispatch()
   const handleClick = ()=> dispatch(updateCreateRoomModal(true))
   
   return (
      <>
         <button
          className='px-1 py-0.75 text-white rounded-full text-sm mb-3 mr-2 border border-violet transition hover:bg-violet group'
          onClick={handleClick}>
            <span className='text-violet group-hover:text-white'>
            Create a room
            </span>
         </button>
      </>
   )
}
