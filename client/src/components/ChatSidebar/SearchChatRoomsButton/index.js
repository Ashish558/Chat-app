import React from 'react'
import { useDispatch } from 'react-redux'
import { updateSearchRoomsModal } from '../../../redux/slices/modals'

export default function SearchChatRooms() {

   const dispatch = useDispatch()
   const handleClick = ()=> dispatch(updateSearchRoomsModal(true))
   
   return (
      <button className='px-1 py-0.75 bg-violet text-white rounded-full text-sm mb-3 mr-2 '
         onClick={handleClick}>
         <span>
             Search rooms
         </span>
      </button>
   )
}
