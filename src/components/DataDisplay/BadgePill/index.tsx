const BadgePill: React.FC = ({ children }) => {
  return (
    <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        {children}
    </div>
  )
}

export default BadgePill