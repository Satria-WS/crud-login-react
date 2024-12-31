import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import background from '../assets/background-login.png';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Container
        sx={{
          height: '100%',
        }}
        maxWidth={false}
        disableGutters
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            bgcolor: '#1C1D21',
            height: '100vh',
            border: '10px solid black',
            ['@media(min-width:768px)']: {
              flexDirection: 'row',
            },
          }}
        >
          {/* col-1 */}
          <Container
            maxWidth="xl"
            sx={{
              //  paddingTop:"2rem",
              flex: '1',
              border: '1px solid red',
              order: '2',
              // backgroundColor:"red",
              ['@media (min-width:768px)']: {},
            }}
          >
            {/* text */}
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
                }}
              >
                <span className="text-white font-semibold">Login</span>
              </Typography>
              <p className="text-[#FFFFFF88] py-3">
                Enter Your account details
              </p>
            </Box>
            {/* form */}
            <form
              action=""
              className="flex items-center justify-center border border-violet-700"
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* username */}
                <FormControl sx={{ m: 1 , border:"1px solid red"  }} variant="standard" fullWidth>
                  <InputLabel sx={{ color: '#FFFFFF80' }} htmlFor="username">
                    Username
                  </InputLabel>
                  <Input
                    sx={{ color: 'white', borderBottom: '1px solid white' }}
                    id="username"
                  />
                </FormControl>
                {/* password */}
                <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
                  <InputLabel sx={{ color: '#FFFFFF80' }} htmlFor="password">
                    Password
                  </InputLabel>
                  <Input
                    sx={{ color: 'white', borderBottom: '1px solid white' }}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          sx={{
                            color: '#FFFFFF80',
                          }}
                          aria-label={
                            showPassword ? 'hide password' : 'display password'
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Button
                  sx={{
                    
                    '&:hover': {
                      backgroundColor: '#7b1fa2 !important', // Darker purple on hover
                    },
                  }}
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </Box>
            </form>
            <Box
              border={'1px solid red'}
              display={'flex'}
              justifyContent="space-around"
              alignItems={'center'}
            >
              <p className="text-white py-3 md:text-xs  ">Dont have an account?</p>
              <Button sx={{
                backgroundColor:"#333437 !important"
              }} variant="contained" >
                Sign up
              </Button>
            </Box>
          </Container>
          {/* col-2 */}
          <Box
            sx={{
              flex: '2',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'cener',
              justifyContent: 'center',
              order: '1',
              border: '1px solid red',
              bgcolor: '#925FE2',
              ['@media (min-width:768px)']: {
                order: '3',
                height: '100vh',
              },
            }}
          >
            <Container maxWidth="xl">
              {/* text */}
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '1.9rem',
                      sm: '2.5rem',
                      md: '3rem',
                      lg: '4rem',
                      xl: '4.5rem',
                    },
                  }}
                  variant="h1"
                >
                  <p className="text-white text-left xl:leading-[70px] pt-20">
                    <span className="font-bold">Welcome to </span>
                    <span>student portal</span>
                  </p>
                </Typography>
                <p className="text-[#FFFFFF88] py-10  text-left  ">
                  Login to access your account
                </p>
              </Box>
              {/* image */}
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{
                  border: '1px solid red',
                }}
              >
                <img
                  className="border border-pink-900 w-full  max-w-[36rem] min-w-[400px]"
                  src={background}
                  alt="background-login"
                />
              </Box>
            </Container>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Login;
