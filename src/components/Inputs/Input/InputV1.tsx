import { forwardRef } from 'react'


const Input = forwardRef(({...props}) => {
  return(
      <input
        {...props}
        type='text'
        autoComplete="off"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
  )
})

export default Input

// Note
// forwardRef was used so it can be used with react-hook-form library