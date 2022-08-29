import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { Card, Col, Row } from 'react-bootstrap';

import '../Style/CardProducts.css'

function CardProducts() {
    const { productsList } = useContext(AppContext);
    console.log(productsList);
  return (
    <Row xs={1} md={1} className="g-4">
      {productsList
        ? productsList.map((product, idx) => (
            <Col key={idx}>
              <section className="containerCard">
                <div className="sectionTitle">
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    style={{ width: "150px" }}
                  />
                </div>
                <div className="sectionDetails">
                  <Card.Body>
                    <p>{product.title}</p>
                    <Card.Text>
                      <h3>{`R$ ${product.price}`}</h3>
                      <strong>{`em ${product.installments.quantity}x de R$ ${
                        product.installments.amount
                      } ${
                        product.installments.rate === 0 ? "sem juros" : ""
                      }`}</strong>
                    </Card.Text>
                  </Card.Body>
                </div>
                <div className="sectionFavorite">coração</div>
              </section>
            </Col>
          ))
        : null}
    </Row>
  );
}

export default CardProducts;