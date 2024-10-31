import styles from "@/styles/Carditem.module.css"; 

const CartItem = ({ item, deleteFromCart }) => {
    const { id, name, price, quantity } = item;

    return (
        <div className={styles.carditem}>
            <h4 className={styles.carditemname}>{name}</h4>
            <h5 className={styles.carditemprice}>$ {price} x {quantity} = ${price * quantity}</h5>
            <div className={styles.carditembuttons}>
                <button onClick={() => deleteFromCart(id)} className={styles.carditembutton}>Eliminar uno</button>
                <button onClick={() => deleteFromCart(id, true)} className={styles.carditembutton}>Eliminar todos</button>
            </div>
        </div>
    );
};

export default CartItem;
