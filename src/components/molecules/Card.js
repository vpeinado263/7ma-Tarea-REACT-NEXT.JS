import Button from "../atoms/Button";

const Card = ({producto, addToCart}) => {
    const { id, title, text, img, price,  bgcolor, ccolor} = producto;

    return(
        <>
        <figure className="productCard">
            <h5 className="productPrice">$ {price}</h5>
            <img className="productImage" src={img} alt={title}/>
            <figcaption>
                <h3 className="productTitle">{title}</h3>
            </figcaption>
            <p className="productDescription">{text}</p>
            <Button
                    bgcolor={bgcolor}
                    ccolor={ccolor}
                    addToCart={addToCart}
                    id={id}
                />
        </figure>
        <style jsx>{`
          .productCard {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            margin: 8px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
        }

        .productCard:hover {
            transform: scale(1.02);
        }

        .productImage {
            width: 5rem;
            height: 5rem;
            border-radius: 8px;
        }

        .productTitle {
            font-size: 1.2rem;
            text-align: center;
            margin: 10px 0;
        }

        .productDescription {
            font-size: 1rem;
            text-align: center;
            color: #666;
        }

        .productPrice {
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            color: #333;
            margin: 10px 0;
        }
        `}</style>
        </>
    )
}
export default Card