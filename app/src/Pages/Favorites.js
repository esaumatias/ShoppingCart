import React, { useContext } from 'react';
import { Card, Col, Row, Spinner, Container } from 'react-bootstrap';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppContext from '../Context/AppContext';
import Header from '../Components/Header';

function Favorites() {
  const { isChecked, setIsChecked, setReloadPage, setItemsCart, itemsCart } = useContext(AppContext);

  const addItensCart = (item) => {
    const { thumbnail, title, price } = item;
    const product = { thumbnail, title, price };
    setItemsCart([...itemsCart, product]);
    setReloadPage(true);
  }

  function removeFavorite(article) {
    const { title } = article;
    const newList = isChecked.filter((value) => (value.title !== title));
    setIsChecked(newList)
    localStorage.setItem("products",JSON.stringify(newList));
    setReloadPage(true);
  }

  return (
    <>
    <Header />
      <Container>
        <Row xs={1} md={1} className="g-4">
        {isChecked
            ? isChecked.map((product, idx) => (
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
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={() => removeFavorite(product)} checked={true}/>
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
      </Container>
    </>
  );
}

export default Favorites;