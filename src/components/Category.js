import { Button, Col, Row } from "react-bootstrap";

function Category({ filterByCategory }) {
  //const filterByCategory = props.filter;
  const ff = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="my-2 mb-2">
      <Col className="justify-content-center d-flex">
        <Button
          variant="outline-info"
          className="mx-2"
          onClick={() => {
            ff("الكل");
          }}
        >
          الكل
        </Button>
        <Button
          variant="outline-info"
          className="mx-2"
          onClick={() => {
            ff("فطار");
          }}
        >
          فطار
        </Button>
        <Button
          onClick={() => {
            ff("غذاء");
          }}
          className="mx-2"
        >
          غداء
        </Button>
        <Button
          variant="outline-info"
          className="mx-2"
          onClick={() => {
            ff("عشاء");
          }}
        >
          العشاء
        </Button>
      </Col>
    </Row>
  );
}
export default Category;
