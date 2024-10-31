import Button from "../atoms/Button";



const Card = ({producto}) => {
    const {img,title, text, bgcolor, ccolor} = producto;

    return(
        <>
        <figure>
            <img src={img} alt={title}/>
            <figcaption>
                <h3>{title}</h3>
            </figcaption>
            <p>{text}</p>
            <Button bgcolor={bgcolor} ccolor={ccolor}/>
        </figure>
        <style jsx>{`
        figure {
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 100%;
            height: 40%;
        }
        h3 {
            font-size: 1rem;
            text-aling: center;
        }
        p{
            font-size: 1rem;
            text-aling: center;
        }
        `}</style>
        </>
    )
}
export default Card