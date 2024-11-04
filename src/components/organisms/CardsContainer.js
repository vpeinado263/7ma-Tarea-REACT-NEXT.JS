import Card from "../molecules/Card";
import { shoppingInitialState } from "@/reducer/shoppingInitialState";

const CardContainer = ({addToCart}) => {
const productos = shoppingInitialState.products;

    return (
    <>
        <div className="cardContainer">
            <div className="card">
            {
             productos.map(producto => <Card key={producto.id} producto={producto} addToCart={addToCart}/>)
            }
            </div>
        </div>

        <style jsx>{`
        .cardContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 16px; 
            padding: 16px; 
        }
        .cardContainer > :global(.card) {
            flex: 1 1 calc(33.33% - 16px); 
            max-width: 200px;
          }
        `}</style>
    </>
    )
}
export default CardContainer;