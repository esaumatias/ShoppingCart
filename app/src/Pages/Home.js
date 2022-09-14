import React from 'react';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import CategoryList from '../Components/CategoryList';
import CardProducts from '../Components/CardProducts';

import "../Style/Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className='containerAll'>
        <Container>
          <Row xs={1} md={2} className="g-4">
            <Col style={{ width: "30%"}}>
              <CategoryList />
            </Col>

            <Col style={{ width: "70%", diplay: "flex", alignItems: "center" }}>
              <CardProducts />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home;
