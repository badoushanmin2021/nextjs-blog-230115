import Head from "next/head";

const name = "Rancode";

function Layout() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images/6.jpg" />
        <h1>Rancode</h1>
      </header>
    </div>
  );
}

export default Layout;
