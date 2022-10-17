import React from 'react'
import { useSelector } from 'react-redux'
import CreateChatRoom from './CreateChatRoom'
import SearchRooms from './SearchRooms'

export default function Modals() {

   const { createRoomModalActive, searchRoomsModalActive } = useSelector(state => state.modal)

   return (
      <>
         {createRoomModalActive && <CreateChatRoom />}
         {searchRoomsModalActive && <SearchRooms />}
      </>
   )
}
