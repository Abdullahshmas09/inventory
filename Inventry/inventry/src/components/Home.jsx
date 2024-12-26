import React from 'react';
import styled from 'styled-components';


const H1 = styled.h1`
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
 
`;

function Home() {
    return (
        <Container>
            <H1>Inventory Management System</H1>
        </Container>
    );
}

export default Home;
