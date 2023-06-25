import { useContext } from "react";
import { Cart as cartContext } from "./Context";

/* eslint-disable react/prop-types */
const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(cartContext);
  console.log(cart);
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: "700px" }}>{prod.name}</span>
        <span>${prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
