import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import '../Style/CardProducts.css'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function CardProducts() {
    const { productsList, setItemsCart, itemsCart, setReloadPage, isChecked, setIsChecked } = useContext(AppContext);
    
    const addItensCart = (item) => {
      const { thumbnail, title, price } = item;
      const product = { thumbnail, title, price };
      setItemsCart([...itemsCart, product]);
      localStorage.setItem("itensCart",JSON.stringify([...itemsCart, product]));
      setReloadPage(true);
    }

    function setIfIsFavorite(product) {
      const {  title } = product;
      const checkEquality = isChecked.some((value) => value.title === title);
      
      if (checkEquality) {
        const newList = isChecked.filter((value) => (value.title !== title));
        setIsChecked(newList)
        localStorage.setItem("favorites",JSON.stringify(newList));
      } else if (!checkEquality)  {
        setIsChecked([...isChecked, product]);
        localStorage.setItem("favorites",JSON.stringify([...isChecked, product]));
      }
      setReloadPage(true);
    }
  
    const checkIfIsFavorite = (title) => (isChecked.some((values) => values.title === title));

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
                      {product.installments !== null ? (
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>{`em ${product.installments.quantity}x de R$ ${
                          product.installments.amount
                        } ${
                          product.installments.rate === 0 ? "sem juros" : ""
                        }`}</strong>
                      </Typography>
                      ) : null }
                    </Card.Text>
                  </Card.Body>
                  <Button variant="contained" color="success" onClick={() => addItensCart(product)}>
                    Adicionar
                  </Button>
                </div>
                <div className="sectionFavorite">
                  <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={() => setIfIsFavorite(product)}
                      checked={ checkIfIsFavorite(product.title) }
                    />
                </div>
              </section>
            </Col>
          ))
        : (
          <Spinner animation="border" role="status" className="containerSpinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
    </Row>
  );
}

export default CardProducts;