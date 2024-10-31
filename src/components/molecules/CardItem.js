const CartItem = ({item, deleteFromCart}) => {

    const {id, name, price, quantity} = item;
 
   return (
   <div className="cart-item">
     <h4 className="cart-item-name">{name}</h4>
     <h5 className="cart-item-price">$ {price} x {quantity} = {price * quantity}</h5>
     <button onClick={() => deleteFromCart(id)} className="cart-item-buttons">Eliminar uno</button>
     <button onClick={() => deleteFromCart(id, true)} className="cart-item-buttons">Eliminar todos</button>
   </div>
   );
 };
 
 export default CartItem;