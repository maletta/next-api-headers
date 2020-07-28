import React from 'react';
import Head from 'next/head';

export async function getServerSideProps(context) {
  const domain = '';

  return {
    props: {
      domain,
      context,
    },
  };
}

const Index = ({ domain, context }) => {
  console.log(context);

  return (
    <>
      <Head>
        <meta property="og:site_name" content="Smartpos" />
        <meta property="og:url" content="https://www.smartpos.net.br/" />
        <meta name="og:title" property="og:title" content="Smartpos" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Loja não encontrada" />
        <meta
          name="og:description"
          property="og:description"
          content="Loja não encontrada"
        />
        <meta
          property="og:image"
          content="https://smartposbr.qa.smartpos.net.br/images/catalogo-share.jpg"
        />
        <meta
          property="og:image:alt"
          content="imagem genérica que representa o catálogo da Smartpos"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Smartpos" />
        <meta name="twitter:text:title" content="Smartpos" />
        <meta name="twitter:description" content="Loja não encontrada" />
        <link rel="canonical" href="https://www.smartpos.net.br/" />
        <meta name="viewport" content="width=device-width, initial-scale1" />
        <meta charSet="utf-8" />
        <title>HealthCheck</title>
      </Head>
    </>
  );
};

export default Index;