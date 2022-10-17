import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateChatRooms } from '../../redux/slices/chatRooms'
import { getChatRooms } from '../../services/chatRoom'
import Chat from './Chat.js/chat'
import CreateChatRoomButton from './CreateChatRoomButton'
import SearchChatRoomsButton from './SearchChatRoomsButton'


export default function ChatSidebar() {

   const { chatRooms } = useSelector(state => state.chatRooms)
   const { socket } = useSelector(state => state.chat)
   const dispatch = useDispatch()

   useEffect(() => {
      socket.on('connection', () => {
         console.log('connected')
      });

      socket.on('disconnect', () => {
         console.log('disconnected')
      });
      const { user_id } = JSON.parse(localStorage.getItem("user"))

      socket.emit('addUser', user_id);

      return () => {
         socket.off('connect');
         socket.off('disconnect');
         socket.off('pong');
      };
   }, []);

   useEffect(() => {
      getChatRooms((err, res) => {
         if (err) return console.log(err)
         dispatch(updateChatRooms({ rooms: res.data }))
      })
   }, [])

   return (
      <div className='grow md:max-w-md px-3 md:px-5 py-3 md:w-440 z-10 relative max-h-100vh-53 overflow-auto scroll-simple'>
         <div>
            <CreateChatRoomButton />
            <SearchChatRoomsButton />
         </div>
         <div className='list'>
            {
               chatRooms.length >= 0 && chatRooms.map(chatRoom => {
                  return <Chat key={chatRoom._id} {...chatRoom} />
               })
            }
         </div>
      </div>
   )
}
