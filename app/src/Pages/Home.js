import React from 'react';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import CategoryList from '../Components/CategoryList';
import CardProducts from '../Components/CardProducts';

import "../Style/Home.css";

function Home() {
  return (
    <Container>
      <Header />
        <Row xs={1} md={2} className="g-4">
          <Col>
            <CategoryList />
          </Col>

          <Col>
            <CardProducts />
          </Col>
        </Row>
    </Container>
        
  )
}

export default Home;
