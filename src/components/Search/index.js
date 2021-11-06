import './Search.css';
import { useState } from 'react';
import { Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <Container className='contentSearch' fluid>
      <Row>
        <Col xs={18}>
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Buscador</InputGroup.Text>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={onSearchValueChange} value={searchValue}/>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Search;
