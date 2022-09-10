import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { lightGreen } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function Header() {
  const { itemsCart } = useContext(AppContext);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SHOPPING CART</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Nav.Link href="#deets">Favoritos</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
        <ListItemIcon>
          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={ itemsCart.length } color="primary">
                <ShoppingCartIcon sx={{ color: lightGreen[500] }}/>
              </StyledBadge>
            </IconButton>
          </Link>
        </ListItemIcon>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Header;
