import Card from "../molecules/Card";


const productos = [
    {
        id: 1,
        img: "https://http2.mlstatic.com/D_NQ_NP_716492-MLA52853049595_122022-O.webp",
        title:  "Colchones de aire o espuma",
        text: "Para reducir la presión en las áreas vulnerables.",
        bgcolor: "green",
    },
  ];

const CardContainer = () => {
    return (
    <>
        <div>
            {
             productos.map(producto => <Card producto={producto}/>)
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