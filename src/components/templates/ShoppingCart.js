import { useReducer } from "react";
import { TYPES } from "../../actions/actions";
import { shoppingReducer } from "../../reducer/shoppingReducer";
import { shoppingInitialState } from "../../reducer/shoppingInitialState";
import CardContainer from "../organisms/CardsContainer";
import CartItem from "../molecules/CardItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  // Destructurar
  const { cart } = state;

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
    <div className="container">
    <div className="shoppingContainer">
      <h2 className="shoppingTitle">Carrito de Compras</h2>
      <h3 className="productsTitle">Productos</h3>

      <div className="gridResponsive">
        <CardContainer addToCart={addToCart} />
      </div>

      <h3 className="shoppingTitle">Carrito</h3>

      <div className="box">
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} />
        ))
        ) : (
          <p className="mensaje">carrito vacío</p>
       )}
      </div>

      <button className="clearButton" onClick={clearCart}>Limpiar carrito</button>
    </div>
    </div>

      <style jsx>{`
      .shoppingContainer {
    
        max-width: 1200px;
        margin: 0 auto;
      
      }

      .shoppingTitle {
        text-align: center;
      

        
    }
    
    .productsTitle, .cartTitle {
        margin: 20px 0 10px;
        font-size: 1.5rem; 
        color: #333; 
    
    }
    
    .box {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
   
       background-color: purple;   
    }
    
    .gridResponsive {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
       
    }

    .mensaje {
      text-align: center;
      color: #777;
      font-style: italic;
    }
    
    .clearButton {
        display: block; 
        margin: 20px auto; 
        padding: 10px 20px; 
        background-color: #dc3545; 
        color: white; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
        transition: background-color 0.3s; 
    }
    
    .clearButton:hover {
        background-color: #c82333; 
    }
    
      `}</style>
    </>
  );
};

export default ShoppingCart;

