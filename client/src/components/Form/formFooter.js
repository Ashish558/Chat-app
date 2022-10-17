import React from 'react'

export function FormFooter({ registerActive, toggleForm }) {

    return (
        registerActive ?
            <p className='mt-1' onClick={toggleForm}>
                Already have an account&nbsp;
                <span className='font-medium underline'>Login</span>
            </p> :
            <p className='mt-1' onClick={toggleForm}>
                Dont have an account&nbsp;
                <span className='font-medium underline'>Signup</span>
            </p>

    )
}
