import { Card, Row, Col } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";

function MyCard(props) {
  const item = props.item;
  return (
    <Zoom>
      <Row className="my
      -3">
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
    </Zoom>
  );
}

export default MyCard;
