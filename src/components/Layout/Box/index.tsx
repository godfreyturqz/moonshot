import Box from '@mui/material/Box'


const BoxComponent: React.FC = ({
    children,
    ...props
}) => {

  return (
    <>
        <Box {...props}>
            {children}
        </Box>
    </>
  )
}

export default BoxComponent
