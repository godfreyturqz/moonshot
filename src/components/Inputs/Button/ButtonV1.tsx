interface ButtonType {
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonType> = ({ variant, children, ...props }) => {

  const classNameVariant = {
    primary: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    secondary: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  }

  return (
    <button 
      {...props}
      className={variant ? classNameVariant[variant] : classNameVariant['primary']}
    >
      {children}
    </button>
  )
}

export default Button