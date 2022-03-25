import Head from "next/head";
import MainLayout from "../components/layout";
import { ThemeProvider } from "next-themes";

// GLOBAL STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/fonts.sass";
import "../styles/global.sass";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Axies | NFT Marketplace Next JS Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
