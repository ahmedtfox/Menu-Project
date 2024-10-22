import { Button, Col, Row } from "react-bootstrap";

function Category({ filterByCategory, allCat }) {
  //const filterByCategory = props.filter;
  const ff = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="my-2 mb-2">
      <Col className="justify-content-center d-flex">
        {allCat.map((cat) => {
          return (
            <Button
              key={cat}
              variant="outline-info"
              className="mx-2"
              onClick={() => {
                ff(cat);
              }}
            >
              {cat}
            </Button>
          );
        })}
      </Col>
    </Row>
  );
}
export default Category;
