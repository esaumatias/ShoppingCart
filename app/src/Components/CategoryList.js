import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { Nav, Container} from 'react-bootstrap';
import { getByProducts } from '../Service/requestApi';

function CategoryList() {
  const { categoryList, setProductsList } = useContext(AppContext);

  const getProducts = async (category) => {
    setProductsList(false);
    await getByProducts(category).then((response) =>
      setProductsList(response.results)
    );
  };
    return (
      <Container>
        <Nav defaultActiveKey="/" className="flex-column">
          {categoryList
            ? categoryList.map((category, key) => (
                <Nav.Link
                  key={key}
                  eventKey={`link-${key + 1}`}
                  onClick={() => getProducts(category.name)}
                  className="categoryList"
                  style={{ color: "black"}}
                >
                  {category.name}
                </Nav.Link>
              ))
            : null}
        </Nav>
      </Container>
    );
}

export default CategoryList;