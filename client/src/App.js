import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import AppRoutes from './navigation/RouterConfig.js';
import { updateIsLoggedIn } from './redux/slices/user.js';
import './style.css';

function App() {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    let userToken = null
    if(JSON.parse(localStorage.getItem("user"))){
      const { token } = JSON.parse(localStorage.getItem("user"))
      userToken = token
    }
    if (userToken !== null) {
      dispatch(updateIsLoggedIn(true))
    }
  }, [])

  if(loading) return <></>
  return (
    <AppRoutes />
  )
}

export default App;
