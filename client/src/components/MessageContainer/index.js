import React, { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import MessageInput from './MessageInput'

import { getMessages } from '../../services/message'
import { addMessage, updateMessages } from '../../redux/slices/chat'
import Messages from './Messages'

function MessageContainer() {

   const [message, setMessage] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const { activeChat, socket, isMessagesActive } = useSelector(state => state.chat)
   const dispatch = useDispatch()

   useEffect(() => {
      socket.on("getMessage", message => {
         const { user_id, username } = JSON.parse(localStorage.getItem("user"))
         // console.log(message)
         // if (message.sender === user_id) return
         dispatch(addMessage({ ...message, _id: Math.floor(Math.random() * 1000000000) }))
      })
   }, [])

   useEffect(() => {
      if (activeChat.id === null) return
      setIsLoading(true)
      getMessages(activeChat.id, (err, res) => {
         if (err) return console.log(err)
         // console.log(res)
         setIsLoading(false)
         res.data.length > 0 ? dispatch(updateMessages(res.data)) : dispatch(updateMessages([]))
      })
   }, [activeChat.id])

   return (
      <div className={`grow border-l self-stretch md:static fixed opacity-1 overflow-auto w-full bg-white top-0 left-0 transition ${isMessagesActive ? 'z-20 opacity-1' : 'z-0 opacity-0'} md:opacity-1`}>
         <div className='md:h-full h-screen flex flex-col relative'>
            <Header roomName={activeChat.name === null ? 'No chat Selected' : activeChat.name} />
            <Messages isLoading={isLoading} />
            <MessageInput setMessage={setMessage} message={message} roomId={activeChat.id} />
         </div>
      </div>
   )
}

export default memo(MessageContainer)