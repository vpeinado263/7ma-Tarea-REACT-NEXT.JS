import Card from "../molecules/Card";
import { shoppingInitialState } from "@/reducer/shoppingInitialState";

const CardContainer = ({addToCart}) => {
const productos = shoppingInitialState.products;

    return (
    <>
    <div className="container">
    <div className="cardContainer">
            <div className="card">
            {
             productos.map(producto => <Card key={producto.id} producto={producto} addToCart={addToCart}/>)
            }
            </div>
        </div>    
    </div> 

        <style jsx>{`
        .cardContainer {
            
    
            padding: 16px; 
            
        }
      

        `}</style>
    </>
    )
}
export default CardContainer;