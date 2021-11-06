import './ShoppingCart.css';
import { Card, Button, Col, Row, Badge } from 'react-bootstrap';


const ShoppingCart = ({quantityProducts, containerProducts, Total, TotalPoints}) => {
  return (
    <section>
      <Card className="text-center">
        <Card.Header>
          <Badge bg="secondary">
            <i class="fas fa-shopping-cart"></i>
          </Badge>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={12}>
              <Card.Title>Mi carrito</Card.Title>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Card.Text>Productos seleccionados: {quantityProducts}</Card.Text>
            </Col>
            <Col xs={6}>
              <Button variant="light">Vaciar carrito</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div>{containerProducts}</div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Card.Text>Total: {Total}</Card.Text>
          <Card.Text>Total de Puntos: {TotalPoints}</Card.Text>
          <Button variant="primary">COMPRAR</Button>
        </Card.Footer>
      </Card>
    </section>
  )
}

export default ShoppingCart;
