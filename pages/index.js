import Header from "../External.js/Header";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
      <title>Space Tourism</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Header />
   <h1>This is home</h1>
   </>
  )
}
