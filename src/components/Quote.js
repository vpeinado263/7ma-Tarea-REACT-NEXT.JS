
const Quote = () => {

    const {text, author} = quote;

  return (
    <>
    <div className="spinnercentro">
      <blockquote>{text}</blockquote>
      <h3>{author}</h3>
      </div>
      
    </>
  )
}

export default Quote;
