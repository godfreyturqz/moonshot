import { forwardRef } from 'react'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return(
      <input
        ref={ref}
        {...props}
        type="text"
        autoComplete="off"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
  )
})

export default Input