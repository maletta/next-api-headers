import React, { useEffect } from 'react'
import Head from 'next/head';
import slug from '../utils/slug';
import router from 'next/router'

const NotFound = () => {


  useEffect(() => {
    const user = router.query.storeCode || '_';
    const domain = {
      url: 'https://USER.qa.smartpos.net.br'.replace('USER', user),
    };

    // window.location.assign(domain)
  }, [])

  return (
    <>
      <Head>
        <meta property="og:site_name" content={"Smartpos"} />
        <meta property="og:url" content={"https://www.smartpos.net.br/"} />
        <meta name="og:title" property="og:title" content={"Smartpos"} />
        <meta property="og:type" content="website" />
        <meta name="description" content={"Loja não encontrada"} />
        <meta name="og:description" property="og:description" content={"Loja não encontrada"} />
        <meta property="og:image" content={"https://null.qa.smartpos.net.br/images/catalogo-share.jpg"} />
        <meta property="og:image:alt" content="imagem genérica que representa o catálogo da Smartpos" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={"Smartpos"} />
        <meta name="twitter:text:title" content={"Smartpos"} />
        <meta name="twitter:description" content={"Loja não encontrada"} />
        <link rel="canonical" href={"https://www.smartpos.net.br/"}></link>
        <meta name="viewport" content="width=device-width, initial-scale1" />
        <meta charSet="utf-8" />
        <title>Smartpos</title>
      </Head>
    </>
  );
}


export default NotFound; 
