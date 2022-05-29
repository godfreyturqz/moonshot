import IconContainer from './IconContainer'

const ArrowLeft = () => {
	return (
		<IconContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M11 17l-5-5m0 0l5-5m-5 5h12"
				/>
			</svg>
		</IconContainer>
	)
}

export default ArrowLeft
