import React from 'react'
import ChatSidebar from '../ChatSidebar'
import MessageContainer from '../MessageContainer'

export default function ChatWrapper() {

   return (
      <div className='flex grow items-stretch'>
         <ChatSidebar />
         <MessageContainer />
      </div>
   )
}
