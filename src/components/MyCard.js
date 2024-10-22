import { Card, Row, Col } from "react-bootstrap";
function MyCard(props) {
  const item = props.item;
  return (
    <Row>
      <Col sm="12">
        <Card className="flex-row d-flex">
          <div className="img-item">
            <Card.Img variant="top" src={item.ImageUrl} />
          </div>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>{item.title}</Card.Title>
              <Card.Title>{item.price}جنيه</Card.Title>
            </div>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default MyCard;
