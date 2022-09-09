import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { Container, ListGroup, Figure } from 'react-bootstrap';
import Header from '../Components/Header';

function Cart() {
    const { itemsCart } = useContext(AppContext);
  return (
    <>
      <Header />
      <Container>
        <ListGroup variant="flush">
          {itemsCart ? (
            itemsCart.map((value, index) => (
              <ListGroup.Item key={ index }>
                <Figure>
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="50x50"
                    src={ value.thumbnail }
                  />
                </Figure>
                <strong>{ value.title }</strong>
              </ListGroup.Item>
            ))
          ) : null }
        </ListGroup>
      </Container>
    </>
  )
}

export default Cart;