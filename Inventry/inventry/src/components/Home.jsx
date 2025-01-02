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

function Home() {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center">
        <img src={invent} width={500} alt="Inventory" />
        <Typography variant="h3" color="white" ml={3}>
          Inventory Management System
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
