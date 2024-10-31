import { useReducer } from "react";
import { TYPES } from "../../actions/actions";
import { shoppingReducer } from "../../reducer/shoppingReducer";
import { shoppingInitialState } from "../../reducer/shoppingInitialState";
import styles from "@/styles/ShoppingCart.module.css";
import Product from "../organisms/Product";
import CartItem from "../molecules/CardItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <h2 className={styles.shoppingTitle}>Carrito de Compras</h2>
      <h3 className={styles.productsTitle}>Productos</h3>
      <div className={styles.gridResponsive}>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h3 className={styles.shoppingTitle}>Carrito</h3>
      <div className={styles.box}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button className={styles.clearButton} onClick={clearCart}>Limpiar carrito</button>
    </>
  );
};

export default ShoppingCart;
