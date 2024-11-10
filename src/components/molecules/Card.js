import Button from "../atoms/Button";
import styles from "@/styles/Card.module.css";

const Card = ({producto, addToCart}) => {
    const { id, title, text, img, price,  bgcolor, ccolor} = producto;

    return(
        <>
        <div className={styles.containerCard}>
             <figure className={styles.productCard}>
            <h5 className={styles.productPrice}>$ {price}</h5>
            <img className={styles.productImage} src={img} alt={title}/>
            <figcaption>
                <h3 className={styles.productTitle}>{title}</h3>
            </figcaption>
            <p className={styles.productDescription}>{text}</p>
            <Button
                    bgcolor={bgcolor}
                    ccolor={ccolor}
                    addToCart={addToCart}
                    id={id}
                />
        </figure>
        </div>
        </>
    )
}
export default Card