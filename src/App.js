import { Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import { items } from "./components/data";
import ItemsList from "./components/ItemsList";
import { useState } from "react";
function App() {
  const [data, setData] = useState(items);
  // get all category
  const allCat = [
    "الكل",
    ...new Set(
      items.map((i) => {
        return i.category;
      })
    ),
  ];
  console.log(allCat);
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setData(items);
      return;
    }
    const newArr = items.filter((i) => {
      return i.category === cat;
    });
    setData(newArr);
  };
  return (
    <div className="font all-color">
      <NavBar />

      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCat={allCat} />
        <ItemsList items={data} />
      </Container>
    </div>
  );
}

export default App;
