import React from 'react'

export default function Input({ value, setValue, label, type }) {

   return (
      <div className="mb-3">
         <label htmlFor={label} className="block text-sm font-medium text-gray-600 text-base">
            {label}
         </label>
         <input
            name={label}
            type={type ? type : 'text'}
            autoComplete="given-name"
            className="mt-1 block py-0.5 w-full outline-0 shadow-sm sm:text-sm"
            value={value}
            onChange={e => setValue(e.target.value)}
         />
      </div>
   )
}
