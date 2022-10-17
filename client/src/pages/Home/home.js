import React from 'react'
import { useSelector } from 'react-redux'
import ChatWrapper from '../../components/ChatWrapper'
import Form from '../../components/Form'
import Navbar from '../../components/Navbar'

export default function Home() {

   const { isLoggedIn } = useSelector(state => state.user)

   console.log(isLoggedIn)

   return (
      <div className={`main min-h-screen ${isLoggedIn ? 'flex flex-col' : ''}`}>
         {isLoggedIn ?
            <>
               <Navbar />
               <ChatWrapper />
            </>
            :
            <Form />
         }
      </div>
   )
}
