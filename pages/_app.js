import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Shiva Reddy</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
