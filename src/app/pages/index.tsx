import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "../component/Layout";

const inter = Inter({ subsets: ["latin"] });

export const index = () => {
  return (
    <>
      <Head>
        <title>Next JS Crud - Nicolas Cena</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="Description" content="Next JS Crud - Nicolas Cena" />
        <meta name="author" content="nicolasnahuelcena@gmail.com" />
        <meta name="og:url" content="https://www.linkedin.com/in/nicolasnahuelcena/" />
      </Head>
      <main>
        <Layout />
      </main>
    </>
  );
};
