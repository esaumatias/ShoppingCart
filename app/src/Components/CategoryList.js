import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { Nav, Container} from 'react-bootstrap';

function CategoryList() {
    const { categoryList } = useContext(AppContext);
    console.log(categoryList);
    return (
      <Container>
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link eventKey="link-1">Todos</Nav.Link>
          {categoryList ? (
            categoryList.map((category, key) => (
              <Nav.Link key={ key } eventKey={`link-${ key + 1 }`}>{ category.name }</Nav.Link>
            ))
          ): null}
        </Nav>
      </Container>
    )
}

export default CategoryList;