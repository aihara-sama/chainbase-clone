import Header from "components/Header";
import PublicLayout from "components/layouts/PublicLayout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main></main>

      <footer></footer>
    </div>
  );
};

Home.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;

export default Home;
