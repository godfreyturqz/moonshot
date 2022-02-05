import Typography from '@mui/material/Typography'


const TypographyComponent: React.FC = ({
    children,
    ...rest
}) => {

  return (
    <>
        <Typography {...rest}>
            {children}
        </Typography>
    </>
  )
}

export default TypographyComponent
