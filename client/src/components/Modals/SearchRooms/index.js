import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion";

import ModalOverlay from '../modalOverlay';
import CloseButton from '../closeButton';

import { updateSearchRoomsModal } from '../../../redux/slices/modals';
import { getSearchedChatRooms } from '../../../services/chatRoom';
import SingleRoom from './SingleRoom';
import Loader from '../../Loader';

export default function CreateChatRoom() {

   const dispatch = useDispatch()
   const [roomName, setRoomName] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const [searchedRooms, setSearchedRooms] = useState([])
   const handleClose = () => dispatch(updateSearchRoomsModal(false))

   useEffect(() => {
      if (roomName.trim() === '') return
      if (roomName.length < 3) return
      setIsLoading(true)
      getSearchedChatRooms(roomName, (err, res) => {
         setIsLoading(false)
         if (err) return console.log(err)
         // console.log(res)
         setSearchedRooms(res.data)
      })
   }, [roomName])

   return (
      <AnimatePresence>
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: "backOut" }}
            className="fixed top-0 left-0 w-full min-h-screen flex justify-center items-center z-50 overflow-auto">

            <motion.div initial={{ y: -20 }} animate={{ y: 0 }} exit={{ y: -30 }} transition={{ duration: 0.7, ease: "backOut" }}
               className="relative z-20 bg-white px-3 max-h-screen py-2 pt-6 md:py-5 md:pt-6 min-w-9/10 md:min-w-30 rounded-md pt-6 overflow-auto md:max-h-9/10">

               <div className=''>
                  <div className=''>
                     <div className='mb-2'>
                        <input className='outline-0 block p-1 w-full text-gray-900 rounded-lg border border-gray-300 sm:text-xs'
                           value={roomName}
                           placeholder='Search for a room (Minimum 3 letters) '
                           onChange={e => setRoomName(e.target.value)}
                        />
                     </div>
                     <div className='list o'>
                        {
                           searchedRooms.length >= 0 && searchedRooms.map(chatRoom => {
                              return <SingleRoom key={chatRoom._id} {...chatRoom}
                                 setSearchedRooms={setSearchedRooms}
                                 handleClose={handleClose} />
                           })
                        }
                     </div>
                     <div>
                        {
                           isLoading ?
                              <div className='flex  pl-0.5'>
                                 <Loader width={30} height={30} border={4} />
                              </div>
                              :
                              searchedRooms.length === 0 && roomName.length > 2 &&
                              <div className='flex'>
                                 <p className='font-sans text-slate-500 pl-0.5'>
                                    No results found.
                                 </p>
                              </div>
                        }
                     </div>
                  </div>
                  <CloseButton handleClose={handleClose} />
               </div>

            </motion.div>

            <ModalOverlay handleClose={handleClose} />

         </motion.div>
      </AnimatePresence>
   )
}
