import React from 'react';
import { Container } from 'react-bootstrap';

import CategoryList from '../Components/CategoryList';

function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <CategoryList />
    </Container>
        
  )
}

export default Home;
