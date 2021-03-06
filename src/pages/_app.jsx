// import "src/styles/globals.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { SWRConfig } from "swr";
import "tailwindcss/tailwind.css";

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

export default MyApp;
