import Container from '@mui/material/Container'


const ContainerComponent: React.FC = ({
    children,
    ...props
}) => {

  return (
    <>
        <Container {...props}>
            {children}
        </Container>
    </>
  )
}

export default ContainerComponent
