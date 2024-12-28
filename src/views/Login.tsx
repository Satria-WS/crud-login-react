import { Box, Container, Typography } from '@mui/material';
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
      <Container sx={{
        height: "100%",
      
      }} maxWidth={false} disableGutters>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          justifyContent:"space-evenly",
            alignItems:"center",
            bgcolor: '#1C1D21',
            height: "100vh",
            border:"10px solid black"
          }}
        >
          {/* col-1 */}
          <Container maxWidth="xl" sx={{
            order: "2",
            backgroundColor:"red",
            ["@media (min-width:768px)"]: {
              order: "none",
              backgroundColor:"pink",
            },
          }}>
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
              <p className="text-white">Enter Your account details</p>
            </Box>
            {/* form */}
            <form
              action=""
              className="flex items-center justify-center border border-violet-700"
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* username */}
                <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
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
              </Box>
            </form>
          </Container>
          {/* col-2 */}
          <Box
            sx={{
              // flexGrow:"1",
              // bgcolor: '#925FE2',
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
                    fontSize: { xs: '1.5rem', sm: '2.5rem', md: '4rem' ,lg:"5rem" },
                  }}
                  variant="h1"
                >
                  <p className="text-white">
                    <span className="font-bold">Welcome to</span>{' '}
                    <span>student portal</span>
                  </p>
                </Typography>
                <p className="text-white">Login to access your account</p>
              </Box>
              {/* image */}
              <Box
                 display={'flex'}
                 flexDirection={'column'}
                 alignItems={'center'}
                 justifyContent={'center'}
                sx={{
                border:"1px solid red"
              }}>
                <img className='border border-pink-900 w-full max-w-[800px] min-w-[350px]' src={background} alt="background-login" />
              </Box>
            </Container>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Login;
