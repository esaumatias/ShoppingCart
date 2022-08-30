import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { Card, Col, Row } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import '../Style/CardProducts.css'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


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
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={ product.thumbnail }
                    alt="Live from space album cover"
                  />
                </div>
                <div className="sectionDetails">
                  <Card.Body>
                    <p>{product.title}</p>
                    <Card.Text>
                      <h3>{`R$ ${product.price}`}</h3>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>{`em ${product.installments.quantity}x de R$ ${
                          product.installments.amount
                        } ${
                          product.installments.rate === 0 ? "sem juros" : ""
                        }`}</strong>
                      </Typography>
                    </Card.Text>
                  </Card.Body>
                  <Button variant="contained" color="success">
                    Adicionar
                  </Button>
                </div>
                <div className="sectionFavorite">
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </div>
              </section>
            </Col>
          ))
        : null}
    </Row>
  );
}

export default CardProducts;