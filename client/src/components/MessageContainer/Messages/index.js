import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../Loader'
import SingleMessage from './singleMessage'

export default function Messages({ isLoading }) {
   const { messages } = useSelector(state => state.chat)
   const messagesRef = useRef(null)

   useEffect(() => {
      messagesRef.current?.scrollIntoView({ behavior: "smooth", block: 'end' });
   }, [messages]);

   return (
      <div className='grow absolute top-53 bottom-53 overflow-auto w-full py-2 scroll-simple'>
         {
            isLoading ?
               <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex'>
                  <Loader />
               </div>
               :
               messages.length === 0 &&
               <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400'>
                  <p className='text-2xl'>
                     No Messages to display
                  </p>
               </div>
         }
         <div className='overflow-auto min-h-[20rem] px-1 flex flex-col' ref={messagesRef} >
            {messages.length > 0 && messages.map(message => {
               return <SingleMessage key={message._id} {...message} />
            })}
         </div>
      </div>
   )
}
