import CardContainer from "./CardsContainer";



const Product = ({product, addToCart}) => {

    const {id, name, price} = product;
 
   return (
   <div className="product">
     <h4 className="product-name">{name}</h4>
     <h5 className="product-price">$ {price}</h5>
     <CardContainer/>
     <button onClick={() => addToCart(id)} className="add-to-cart">Agregar</button>
   </div>
   )
 }
 
 export default Product;