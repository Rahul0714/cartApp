import { useContext, useEffect, useState } from "react";
import { Cart as cartContext } from "./Context";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const [total, setTotal] = useState();
  const { cart } = useContext(cartContext);
  useEffect(() => {
    setTotal(cart.reduce((acc, prod) => acc + +prod.price, 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: "30px" }}>My Cart</span>
      <br />
      <span style={{ fontSize: "30px" }}>Total: ${total}</span>
      <div className="productContainer">
        {cart.length > 0 ? (
          cart.map((prod) => <SingleProduct prod={prod} key={prod.id} />)
        ) : (
          <h1>Empty Cart 🛒</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
