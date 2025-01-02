import React from 'react';
import styled from 'styled-components';
import invent from '../images/vector.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #4facfe, #00f2fe);
`;

const Image = styled.img`
@media (max-width: 576px) {
  margin-top: -3rem;
  width: 90%;
  height: auto;
}
`
function Home() {
  return (
    <Container>
      <Box display='flex' alignItems='center' justifyContent='center' sx={{
        '@media(max-width:576px)': {
          display: "flex",
          flexDirection: "column"
        }
      }}>
        <Image src={invent} width={500} alt='Inventory'
        />
        <Typography variant='h3' color='white' ml={3} sx={{
          '@media(max-width:576px)': {
            fontSize: "20px",
            marginLeft: "0",
            marginTop: "1rem",
          }
        }}>
          Inventory Management System
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
