import { useReducer } from "react";
import { TYPES } from "../actions/actions";
import { shoppingReducer } from "../reducer/shoppingReducer";
import { shoppingInitialState } from "../reducer/shoppingInitialState";
import Product from "../components/Product";
import CartItem from "../components/CartItem";

const ShoppingCart = () => {
 
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  // Destructurar el estado
  const { products, cart } = state;

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
    } else {
    dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})
    }
  };

  // Mover la función clearCart dentro del componente
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <h2 className="shopping-cart-title">Carrito de Compras</h2>
      <h3 className="products-title">Productos</h3>
      <div className="box grid-responsive">
        {
          products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)
        }
      </div>
      <h3 className="cart-title">Carrito</h3>
      <div className="box">
        {
          cart.map((item, i) => <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />)
        }
      </div>
      <button className="clear-cart-button" onClick={clearCart}>Limpiar carrito</button>
    </>
  );
};

export default ShoppingCart;
