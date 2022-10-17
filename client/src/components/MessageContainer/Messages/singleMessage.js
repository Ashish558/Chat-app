import React from 'react'

export default function SingleMessage({ text, sender }) {

   const { user_id } = JSON.parse(localStorage.getItem("user"))

   return (
      <div className={`mb-4  ${user_id === sender._id ? 'self-end' : 'self-start'}`}>
         <div className={`py-1 px-1 inline ${user_id === sender._id ? 'rounded-l-lg rounded-br-lg bg-primary text-white' : 'rounded-r-lg rounded-bl-lg  bg-white-dark'} flex flex-col`}>
            <p className='inline text-sm font-bold capitalize'>
               {sender.username}
            </p>
            <p className={`inline`}>
               {text}
            </p>
         </div>
      </div>
   )
}
