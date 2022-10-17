import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from 'react-redux';

import ModalOverlay from '../modalOverlay';
import CloseButton from '../closeButton';

import { updateCreateRoomModal } from '../../../redux/slices/modals';
import { createChatRoom, getChatRooms } from '../../../services/chatRoom';
import { updateChatRooms } from '../../../redux/slices/chatRooms';

export default function CreateChatRoom() {

   const dispatch = useDispatch()
   const [roomName, setRoomName] = useState('')
   const handleClose = () => dispatch(updateCreateRoomModal(false))

   const handleSubmit = () => {
      createChatRoom(roomName, (err, res) => {
         if (err) return console.log(err)
         handleClose()
         getChatRooms((err, res) => {
            if (err) return console.log(err)
            dispatch(updateChatRooms({ rooms: res.data }))
         })
      })
   }

   return (
      <AnimatePresence>
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: "backOut" }}
            className="fixed top-0 left-0 w-full min-h-screen flex justify-center items-center z-50">

            <motion.div initial={{ y: -20 }} animate={{ y: 0 }} exit={{ y: -30 }} transition={{ duration: 0.7, ease: "backOut" }}
               className="relative z-20 bg-white px-3 py-5 pb-2 min-w-9/10 md:min-w-30 max-w-30 rounded-md">
               <div>
                  <p className='mb-1'>
                     Enter chat room name
                  </p>
                  <input className='outline-0 block p-1 w-full text-gray-900 rounded-lg border border-gray-300 sm:text-xs mb-2'
                     value={roomName}
                     onChange={e => setRoomName(e.target.value)}
                  />
                  <button className='bg-primary hover:bg-primary-dark text-white font-bold py-1 px-3 rounded'
                  onClick={handleSubmit}>
                     Create
                  </button>
               </div>
               <CloseButton handleClose={handleClose} />
            </motion.div>

            <ModalOverlay handleClose={handleClose} />

         </motion.div>
      </AnimatePresence>
   )
}
