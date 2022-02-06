import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '../../components/Icons/ArrowBack'
import FacebookIcon from '../../components/Icons/Facebook'
import GoogleIcon from '../../components/Icons/Google'
import { Link } from 'react-router-dom'


const Signin = () => {
  

  return (
    <>
      <head>
        <title>Login | Material Kit</title>
      </head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <Link to="/">
            <Button
              component="a"
              startIcon={<ArrowBackIcon/>}
            >
              Dashboard
            </Button>
          </Link>
          <form onSubmit={() => {}}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Sign in on the internal platform
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={() => {}}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  onClick={() => {}}
                  size="large"
                  variant="contained"
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
            <Box sx={{ pb: 1, pt: 3 }}>
              <Typography align="center" color="textSecondary" variant="body1">
                or login with email address
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
              //   error={Boolean(formik.touched.email && formik.errors.email)}
              //   helperText={formik.touched.email && formik.errors.email}
              //   onBlur={formik.handleBlur}
              //   onChange={formik.handleChange}
              //   value={formik.values.email}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              //   error={Boolean(formik.touched.password && formik.errors.password)}
              //   helperText={formik.touched.password && formik.errors.password}
              //   onBlur={formik.handleBlur}
              //   onChange={formik.handleChange}
              //   value={formik.values.password}
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                // disabled={formik.isSubmitting}
              >
                Sign In Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Don't have an account?<Link to="/register"> Sign Up</Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  )
}

export default Signin
