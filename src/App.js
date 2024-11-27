import "./App.css";
import ProductCategory from "./component/ProductCategory";

function App() {
  const productProps = {
    category: "Sporting Goods",
    products: [
      {
        name: "Football",
        price: 49.99,
        status: true,
      },
      {
        name: "Baseball",
        price: 9.99,
        status: true,
      },
      {
        name: "Tennis Racquet",
        price: 29.99,
        status: false,
      },
    ],
  };

  return (
    <div className="App">
      <ProductCategory {...productProps} />
    </div>
  );
}

export default App;
