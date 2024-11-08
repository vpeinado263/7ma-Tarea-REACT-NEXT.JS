import { useState, useEffect } from 'react'
import axios from 'axios';
import Quote from './Quote';
import Loader from './Loader';
import styles from "@/styles/BBApp.module.css";
import Image from 'next/image';


const initialQuote = {
    text: "",
    author: ""
}

const BBApp = () => {
 const [quote, setQuote] = useState(initialQuote)
 
 const [isLoading, setIsLoading] = useState(false)

 //ASYNC AWAIT

 const updateQuote = async () => {

   setIsLoading(true)
   const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes"
   const response = await axios.get(ENDPOINT);
   const [newQuote] = await response.data;
   const {quote: text, author} = newQuote;

   //Objetos literales
     setQuote({
         text,
         author
     })
  
     setTimeout(() => {
      setIsLoading(false)
     }, 1500);
  }
  
   useEffect(() => {
      updateQuote ()
   }, [])
   
  return (
    <div className={styles.container}>
    <Image
    src= "https://www.dafont.com/forum/attach/orig/1/4/149303.jpg"
    alt= "breaking-bad"
    width={290}
    height={180}
    priority
    />

    {
      isLoading ? <Loader/> : <Quote quote={quote}/>
    }

    <button className={styles.button} onClick={ updateQuote}>Obtener otra cita</button>
    </div>
  )
}

export default BBApp;
