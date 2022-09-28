import "../styles/globals.css";
import Head from "next/head";
import Header from "../External/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
