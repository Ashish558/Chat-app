import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateActiveChat, updateIsMessagesActive } from '../../../redux/slices/chat'

export default function Chat({ admin, name, members, _id }) {

   const { socket } = useSelector(state => state.chat)
   const dispatch = useDispatch()

   const handleClick = () => {
      dispatch(updateActiveChat({ id: _id, name, admin, members }))
      socket.emit('joinRoom', {
         roomId: _id,
         roomName: name
      })
      dispatch(updateIsMessagesActive({ active: true }))
   }

   return (
      <div className='flex items-center px-1 py-1 bg-white-light rounded-md hover:bg-white-dark mb-1 min-w-full ' onClick={handleClick} >
         <div className='mr-2'>
            <img src='/group.png' className='w-6 rounded-full' />
         </div>
         <p>
            {name}
         </p>
      </div>
   )
}
