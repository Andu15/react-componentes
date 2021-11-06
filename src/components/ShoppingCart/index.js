import './ShoppingCart.css';
import { Card, Button } from 'react-bootstrap';


const ShoppingCart = () => {
  return (
    <section>
      <Card >
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title><i class="fas fa-shopping-cart"></i></Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </section>
  )
}

export default ShoppingCart;
