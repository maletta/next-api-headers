import Head from "next/head";
import React from 'react';
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const { params, req, res, query, preview, previewData } = context;

  console.log("query ", query);
  const { storeCode, productCode } = query;

  // tratar erro de store não encontrada
  const stringStoreFetched = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${storeCode}`
  
  const storeFetched = await fetch(stringStoreFetched).then(r => r.json())
  const store = {
    tenantId: storeFetched.id || '',
    code: storeFetched.codigo || '',
    user: storeFetched.usuario || '',
    fantasy: storeFetched.fantasia || '',
  };

  const id = store.tenantId;
  const idTeste = '3957a42e-74eb-4095-a662-70c01c346689';
  console.log('store ', store);

  //tratar erro de produto e store não encontrados
  const stringProduct = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${store.tenantId}/produtos/${productCode}`;
  const productFetched = await fetch(stringProduct).then(r => r.json());
  //console.log('stringProduct ', stringProduct);
  console.log('productFetched ', productFetched);

  const product = {
    code: productFetched.codigo || '',
    description: productFetched.descricao || '',
    observation: productFetched.observacao || '',
    price: productFetched.valorVenda || '',
    tenantId: productFetched.tenant_id || '',
    update: productFetched.atualizacao || '',
  }

  // console.log(process.env);

  const stringFetchedImage = `${process.env.NEXT_APP_PHOTO_SERVICE}/list/?tenant_id=${id}&id=${productCode}`
  const productImagesFetched = await fetch(stringFetchedImage).then(r => r.json()).catch();

  const [image] = productImagesFetched; 
  console.log('image ',image);




  return {
    props: {
      store,
      product,
      image
    },
  }
}

const ShareProduct = (props) => {
  const { store, product, image } = props;
  // const imageURL = `${process.env.NEXT_APP_IMG_API_CDN}/?tenant_id=${image.key}&last_modified=${image.lastModified}`;
  const imageURL = `${process.env.NEXT_APP_IMG_API_CDN}/product=${product.code}&lastUpdate=${product.update}`;

  return (
    <>
      <Head>
        <meta property="og:site_name" content="" />
        <meta property="og:url" content="localhost:3000" />
        <meta name="og:title" property="og:title" content={store.description} />
        <meta property="og:type" content="website" />
        <meta name="description" content={product.description} />
        <meta name="og:description" property="og:description" content={product.description} />
        <meta property="og:image" content={imageURL} />
        <meta property="og:image:alt" content="descrever imagem" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={store.description}  />
        <meta name="twitter:description" content={product.description}  />
        <meta name="twitter:site" content="localhost:3000" />
        <meta name="twitter:creator" content="maletta" />
        <meta name="viewport" content="width=device-width, initial-scale1" />
        <meta charSet="utf-8" />
        <title>"Primeiro site next"</title>
      </Head>
      <section>
        <div className="content">SSR</div>
        <div className="content">SSR teste 2</div>

      </section>
    </>
  );
}

export default ShareProduct;
