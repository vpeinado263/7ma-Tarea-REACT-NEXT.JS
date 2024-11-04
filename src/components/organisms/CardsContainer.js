import Card from "../molecules/Card";
import { shoppingInitialState } from "@/reducer/shoppingInitialState";

const CardContainer = ({addToCart}) => {
const productos = shoppingInitialState.products;

    return (
    <>
        <div>
            {
             productos.map(producto => <Card key={producto.id} producto={producto} addToCart={addToCart}/>)
            }
        </div>

        <style jsx>{`
        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        `}</style>
    </>
    )
}
export default CardContainer;