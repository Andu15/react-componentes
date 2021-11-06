import './Search.css';
import { useState } from 'react';
import { Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={12} md={10} lg={10} xl={8} xxl={8}>
          <InputGroup size="lg" className="inputGroup">
            <InputGroup.Text id="inputGroup-sizing-lg" className="labelSearch"><i className="fas fa-search iconSearch"></i></InputGroup.Text>
            <FormControl className="inputSearch" placeholder="Escribe aquí..." aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={onSearchValueChange} value={searchValue} />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Search;
