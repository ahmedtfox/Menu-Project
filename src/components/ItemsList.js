import { Row } from "react-bootstrap";
import MyCard from "./MyCard";

function ItemsList(props) {
  const items = props.items;
  return (
    <Row>
      {items.length > 0 ? (
        items.map((i) => {
          return <MyCard item={i} />;
        })
      ) : (
        <h1> no Data</h1>
      )}
    </Row>
  );
}

export default ItemsList;
