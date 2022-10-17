import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateChatRooms } from '../../../../redux/slices/chatRooms';
import { getChatRooms, joinChatRoom } from '../../../../services/chatRoom';

export default function SingleRoom({ _id, name, members, handleClose }) {

   const [isJoined, setIsJoined] = useState(false)
   const dispatch = useDispatch()

   useEffect(() => {
      const { user_id } = JSON.parse(localStorage.getItem("user"))
      members.includes(user_id) && setIsJoined(true)
   }, [])

   const handleClick = () => {
      joinChatRoom(_id, (err, res) => {
         if (err) return console.log(err)
         setIsJoined(true)
         handleClose()
         getChatRooms((err, res) => {
            if (err) return console.log(err)
            dispatch(updateChatRooms({ rooms: res.data }))
         })
      })
   }

   return (
      <div className='flex items-center px-1 py-1 bg-white-light rounded-md mb-1'>
         <div className='mr-2'>
            <img src='/group2.webp' className='w-5 rounded-full' />
         </div>
         <p className='mr-1'>
            {name}
         </p>
         {
            isJoined ?
               <button className='ml-auto px-1 py-0.5 text-violet rounded-md text-sm mr-1 border border-violet transition'>
                  Joined
               </button> :
               <button className='ml-auto px-1 py-0.5 bg-violet hover:bg-violet-dark text-white rounded-md text-sm mr-1'
                  onClick={handleClick}>
                  Join
               </button>
         }
      </div>
   )
}
