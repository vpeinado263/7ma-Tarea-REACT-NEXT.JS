import styles from "@/styles/Product.module.css";
import Button from "../atoms/Button";
import CardContainer from "./CardsContainer";

const Product = ({ product, addToCart }) => {
    const { id, name, price } = product;

    return (
        <div className={styles.product}>
            <h4 className={styles.productName}>{name}</h4>
            <h5 className={styles.productPrice}>$ {price}</h5>
            <CardContainer />
            <Button addToCart={addToCart}
                id={id}/>
        </div>
    );
};

export default Product;
