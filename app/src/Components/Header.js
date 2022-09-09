import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemIcon from '@mui/material/ListItemIcon';
import { lightGreen } from '@mui/material/colors';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SHOPPING CART</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#deets">Favoritos</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
        <ListItemIcon>
          <Link to="/cart">
            <ShoppingCartIcon sx={{ color: lightGreen[500] }} fontSize="medium" />
          </Link>
        </ListItemIcon>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Header;
