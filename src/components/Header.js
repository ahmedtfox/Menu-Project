import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Row>
      <Col
        sm="12"
        className="mt-3 my-color row justify-content-center text-center"
      >
        <div className="fs-1">قائمة الطعام</div>
        <div className="justify-content-center d-flex">
          <p className="underLine"></p>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
