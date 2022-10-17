import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Input from '../Input'
import Message from './message'
import { FormFooter } from './formFooter'

import { registerUser, loginUser } from '../../services/auth'
import { updateIsLoggedIn } from '../../redux/slices/user'

export default function Form() {

   const [email, setEmail] = useState('ash@gmail.com')
   const [password, setPassword] = useState('1234')
   const [username, setUsername] = useState('')
   const [registerActive, setRegisterActive] = useState(true)
   const [errorMsg, setErrorMsg] = useState('')
   const [successMsg, setSuccessMsg] = useState('')
   const [loading, setLoading] = useState(false)

   const dispatch = useDispatch()

   const handleSubmit = () => {
      setErrorMsg('')
      setSuccessMsg('')
      if (email.trim() === '' || password.trim() === '') return setErrorMsg('Please fill all the required fields')

      setLoading(true)
      if (registerActive) {
         if (username.trim() === '') return setErrorMsg('Please fill all the required fields')
         registerUser({ email, password, username }, (err, res) => {
            setLoading(false)
            if (err) {
               if (err.response.data.message) {
                  setErrorMsg(err.response.data.message)
               }
               console.log(err.response)
               return
            } else {
               setSuccessMsg('User created, login to continue')
            }
            console.log(res)
         })
      } else {
         loginUser({ email, password }, (err, res) => {
            setLoading(false)
            if (err) {
               if (err.response.data.message) {
                  setErrorMsg(err.response.data.message)
               }
               console.log(err.response)
               return
            } else {
               // console.log(res)
               setSuccessMsg('Login successful')
               const { userImg, user_id, username, token } = res.data
               let user = { userImg, user_id, username, token }
               localStorage.setItem('user', JSON.stringify(user))
               dispatch(updateIsLoggedIn(true))
            }
         })
      }

   }
   const toggleForm = () => {
      setRegisterActive(!registerActive)
      setErrorMsg('')
      setSuccessMsg('')
   }
   
   return (
      <div className='flex md:justify-center md:items-center min-h-screen flex-col'>
         <div className='md:min-w-600'>
            <div className='text-center py-1 mb-5'>
               <p className='font-sans text-xl font-semibold text-primary'>
                  {registerActive ? 'Register' : 'Login'}
               </p>
            </div>

            <Message message={errorMsg} />
            <Message message={successMsg} type='success' />
            <div className="md:container w-full px-3">
               <Input value={email} setValue={setEmail} label='Email' />
               {registerActive && <Input value={username} setValue={setUsername} label='Username' />}
               <Input value={password} setValue={setPassword} label='Password' type='password' />
               <div>
                  <button
                     type="submit"
                     onClick={handleSubmit}
                     className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-25"
                     disabled={loading}
                  >
                     {registerActive ? 'Register' : 'Login'}
                  </button>
               </div>

               <FormFooter registerActive={registerActive} toggleForm={toggleForm} />

            </div>
         </div>


      </div>
   )
}

