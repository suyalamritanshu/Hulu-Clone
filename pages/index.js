import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let's build hulu clone</h1>
      {/* Header Components */}

      <Header/>

      {/* Navbar Components */}

      {/* Results Components */}
    </div>
  );
}