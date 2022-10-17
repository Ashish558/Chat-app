import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { combineReducers } from 'redux'

import userReducer from './slices/user'
import modalReducer from './slices/modals'
import chatRoomsReducer from './slices/chatRooms'
import chatReducer from './slices/chat'

const reducer = combineReducers({
    user: userReducer,
    modal: modalReducer,
    chatRooms: chatRoomsReducer,
    chat: chatReducer,
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})



setupListeners(store.dispatch)