import Head from "next/head";
import React from 'react';

const Index = () =>
  <>
    <Head>
      <meta name="description" content="site localhost" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="site localhost next js" />
      <meta name="og:description" property="og:description" content="site local host" />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="localhost:3000" />
      <meta property="og:image" content="https://images4.alphacoders.com/936/936378.jpg" />  
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="título do tw" />
      <meta name="twitter:description" content="descricao tw" />
      <meta name="twitter:site" content="localhost:3000" />
      <meta name="twitter:creator" content="maletta" />
      <meta name="viewport" content="width=device-width, initial-scale1" />
      <meta charSet="utf-8" />
      <title>"Primeiro site next"</title>
    </Head>
    <section>
      <div className="content">teste</div>
      <div className="content">teste</div>

    </section>
  </>;


export default Index;
