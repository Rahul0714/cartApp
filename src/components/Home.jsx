import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import { useState } from "react";

faker.seed(10);

const Home = () => {
  const prodArr = [...Array(10)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    };
  });

  //   console.log(arr);
  const [product] = useState(prodArr);
  // console.log(cart);
  return (
    <div className="productContainer">
      {product.map((prod) => (
        <SingleProduct key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Home;
