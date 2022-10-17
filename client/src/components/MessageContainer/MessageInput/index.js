import React from 'react'
import { useSelector } from 'react-redux'
import { saveMessage } from '../../../services/message'

export default function MessageInput({ message, setMessage, roomId }) {

   const { socket } = useSelector(state => state.chat)

   const handleSubmit = () => {
      if (roomId === undefined || roomId === null) return
      if (message.trim() === '') return

      const { user_id, username } = JSON.parse(localStorage.getItem("user"))
      const msg = {
         sender: {
            _id: user_id,
            username,
         },
         text: message,
         chatRoomId: roomId
      }
      socket.emit("sendMessage", msg)
      saveMessage(msg, (err, res) => {
         if (err) return console.log(err)
         // console.log(res)
      })

      setMessage('')
   }

   return (
      <div className='mt-auto px-1 flex items-center'>
         <input className='grow outline-0 block p-1 w-full text-gray-900 rounded-lg border border-gray-300 sm:text-xs mb-1'
            value={message}
            onChange={e => setMessage(e.target.value)}
         />
         <button className='ml-1 w-5 h-5 flex justify-center items-center rounded-full' onClick={handleSubmit} >
            <img src='/icons/send.svg' />
         </button>
      </div>
   )
}
