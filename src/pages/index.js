import BBApp from "@/components/BBApp";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/react.png" />
      </Head>
      
      <BBApp/>
    </>
  );
}
