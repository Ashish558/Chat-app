import React from 'react'

export default function Message({ message, type }) {

    return (

        message !== '' &&
        <p className={`text-center ${type === 'success' ? 'text-green-500' : 'text-rose-600'} mb-2`}>
            {message}
        </p>

    )
}
