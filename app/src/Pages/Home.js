import React from 'react';
import { Container } from 'react-bootstrap';

import CategoryList from '../Components/CategoryList';
import CardProducts from '../Components/CardProducts';

import "../Style/Home.css";

function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <section className="containerProducts">
        <CategoryList />
        <CardProducts />
      </section>
    </Container>
        
  )
}

export default Home;
