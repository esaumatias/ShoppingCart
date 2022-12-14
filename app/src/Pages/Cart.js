import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';
import { Container, ListGroup, Figure } from 'react-bootstrap';
import Icon from '@mui/material/Icon';
import { green, red } from '@mui/material/colors';
import Header from '../Components/Header';
import "../Style/Cart.css";

function Cart() {
    const { itemsCart, setItemsCart } = useContext(AppContext);
    const [removedRepeatItems, setRemovedRepeatItems] = useState([]);

    const totalProduct = (value) => {
      return itemsCart.filter((values) => values.title === value.title).length;
    }

    useEffect(() => {
      const uniqueArray = itemsCart.filter(function (a) {
        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
      }, Object.create(null))
      setRemovedRepeatItems(uniqueArray);
    }, [itemsCart])

    const removeItem = (product) => {
      const itenCart = itemsCart.slice();
      const index = itemsCart.findIndex((item) => item.title === product);
      itenCart.splice(index, 1);
      setItemsCart(itenCart);
      localStorage.setItem("itensCart",JSON.stringify(itenCart));
    }

    const addItem = (product) => {
      setItemsCart([...itemsCart, product]);
      localStorage.setItem("itensCart",JSON.stringify([...itemsCart, product]));
    }


  return (
    <>
      <Header />
      <div  className='conatinerPageAll'>
        <h1>CARRINHO DE COMPRAS</h1>
        <Container>
          <ListGroup variant="flush">
            {removedRepeatItems ? (
              removedRepeatItems.map((value, index) => (
                <ListGroup.Item key={ index }>
                  <div className='containerCart'>
                    <div>
                      <Figure>
                        <Figure.Image
                          width={50}
                          height={50}
                          alt="50x50"
                          src={ value.thumbnail }
                        />
                      </Figure>
                      <strong>{ value.title }</strong>
                    </div>
                    <div className='containerButtons'>
                      <button onClick={() => removeItem(value.title)}><Icon sx={{ color: red[500] }}>remove_circle</Icon></button>
                        <div>{totalProduct(value)}</div>
                      <button onClick={() => addItem(value)}><Icon sx={{ color: green[500] }}>add_circle</Icon></button>                                 
                    </div>
                  </div>
                </ListGroup.Item>
              ))
            ) : null }
          </ListGroup>
      </Container>
      </div>
    </>
  )
}

export default Cart;