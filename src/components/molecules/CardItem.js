
const CartItem = ({ item, deleteFromCart }) => {
    const { id, price, quantity, img, title } = item;

    return (
        <>
        <div className="container">
             <div className="carditem">
            <h4 className="carditemname">{title}</h4>
            <h5 className="carditemprice">$ {price} x {quantity} = ${price * quantity}</h5>
            <img className="img" src={img} alt={title}/>
            <div className="carditembuttons">
                <button onClick={() => deleteFromCart(id)} className="carditembutton">Eliminar uno</button>
                <button onClick={() => deleteFromCart(id, true)} className="carditembutton">Eliminar todos</button>
            </div>
            </div>
        </div>

        <style jsx>{`
        .carditem {
            display: flex;
            flex-direction: column; 
            border: 1px solid #ccc; 
            border-radius: 8px; 
            padding: 16px; 
            margin: 8px 0; 
        
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

           

        }
        
        .carditemname {
            font-size: 1rem; 
            margin: 0; 
           
        }
        
        .carditemprice {
            font-size: 1rem; 
            color: #555;
            margin: 4px 0; 
            
        }

        .carditembuttons {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 10px;

           
        }
        
        .carditembutton {
            padding: 8px 16px;
            background-color: rgb(217, 170, 247); 
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
        }
        
        .carditembutton:hover {
            background-color: #d32f2f; 
            transform: scale(1.05); 
        }
        
        .carditembutton:active {
            background-color: #b71c1c; 
            transform: scale(0.95); 
        }
        .img {
            width: 150px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.2s ease;
            background-color: #fff;
            text-align: center;
        }
        img:hover {
           transform: scale(1.05); 
        }

        `}</style>
        </>
      
    );
};

export default CartItem;
