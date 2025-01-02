import { useState } from 'react';
import { Button, Grid2 } from '@mui/material';
import {
  Box,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import register from '../images/image 3 (2).png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
  @media (max-width: 576px) {
    width: 100%;
    height: auto;
  }
`;
function Signup() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fname ||
      !formData.lname ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      alert('please fill in all the fields');
    } else if (formData.lname.length < 7) {
      alert('lname length is minnimum 8');
    } else if (!formData.email.includes('@', '.')) {
      alert('email must have @ and . ');
    } else {
      console.log(formData);
    }
  };

  return (
    <Container maxWidth='lg'>
      <Grid2 container spacing={2}>
        <Grid2 md={6}>
          <Img src={register} alt='Register' height={550} />
        </Grid2>
        <Grid2
          md={6}
          sx={{
            marginLeft: '2rem',
            marginTop: '3rem',
            '@media(max-width:600px)': {
              marginLeft: '0',
            },
          }}
        >
          <h1>Register</h1>
          <p>Manage all your inventory efficiently</p>
          <p style={{ fontSize: '14px' }}>
            Let’s get you all set up so you can verify your personal account and
            begin setting up your work profile
          </p>
          <form action='' method='get' onSubmit={handleSubmit}>
            <Box display='flex' flexDirection='column' gap={2}>
              <Box display='flex' sx={{ marginTop: '1rem' }} gap={2}>
                <TextField
                  id='fname'
                  label='First Name'
                  placeholder='Enter your name'
                  variant='outlined'
                  fullWidth
                  name='fname'
                  onChange={handleChange}
                  value={formData.fname}
                  inputProps={{
                    pattern: '^[A-Za-z]+$',
                    title: 'Only letters are allowed',
                  }}
                />

                <TextField
                  id='lname'
                  label='Last Name'
                  placeholder='Minimum 8 characters'
                  value={formData.lname}
                  variant='outlined'
                  fullWidth
                  name='lname'
                  onChange={handleChange}
                  inputProps={{
                    pattern: '^[A-Za-z]+$',
                    title: 'Only letters are allowed',
                  }}
                />
              </Box>

              <Box display='flex' sx={{ marginTop: '.3rem' }} gap={2}>
                <TextField
                  id='email'
                  label='Email'
                  value={formData.email}
                  placeholder='Enter your Email'
                  variant='outlined'
                  fullWidth
                  name='email'
                  onChange={handleChange}
                />

                <TextField
                  id='phone'
                  label='Phone Number'
                  value={formData.phone}
                  placeholder='Minimum 8 characters'
                  variant='outlined'
                  fullWidth
                  type='tel'
                  name='phone'
                  onChange={handleChange}
                  inputProps={{
                    pattern: '^0[0-9]{10}$',
                    title:
                      'Phone number must start with 0 followed by 9 digits',
                  }}
                  required
                />
              </Box>

              <TextField
                id='password'
                label='Password'
                placeholder='Enter your password'
                variant='outlined'
                fullWidth
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />

              <Box display='flex' mx='' my='' sx=''>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='I agree to all terms, privacy policies, and fees'
                />
              </Box>
            </Box>
            <Button
              variant='contained'
              size='large'
              type='submit'
              sx={{
                background: '#101540',
                marginTop: '.3rem',
                '@media(max-width:600px)': {
                  width: '100%',
                },
              }}
            >
              Signup
            </Button>
            <Box display='flex' mx='' my='' sx=''>
              <p>
                Already have an account?{' '}
                <a style={{ textDecoration: 'none' }} href='/login'>
                  Log in
                </a>
              </p>
            </Box>
          </form>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Signup;
