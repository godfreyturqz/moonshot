import IconContainer from './IconContainer'

const ChevronLeft = () => {
	return (
		<IconContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15 19l-7-7 7-7"
				/>
			</svg>
		</IconContainer>
	)
}

export default ChevronLeft
