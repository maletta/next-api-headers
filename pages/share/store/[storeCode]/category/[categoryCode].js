import Head from "next/head";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import sizeOf from 'buffer-image-size';

import slug from '../../../../../utils/slug';


function searchCategory(url){
  axios.
  get(url)
  .then(r => r)
  .catch(r => r)
}



export async function getServerSideProps(context) {
  const { params, req, res, query, preview, previewData } = context;

  console.log(`(-----------------------------------------------`);
  console.log("query ", query);
  console.log('req ', `http://${req.headers.host}${req.url}`);

  const {storeCode,categoryCode} = query; 
  
const stringSearchCategory = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/produtos/`

  return {
    props: {
      domain,
      store,
      product,
      imageProperties,
    },
  }
}

const ShareProduct = (props) => {
  const { domain, store, product,  imageProperties } = props;

  useEffect(() => {
    // window.location.assign(`${domain.url}${domain.parameters}`);
    // const aux = new Image();
    // aux.src = url;
    // console.log(url)
    // aux.onload = () => {
    //   setImg(url);
    // };
    console.log(imageProperties);
  }, [])

  return (
    <>
      <Head>
        <meta property="og:site_name" content={`${domain.name}`} />
        <meta property="og:url" content={`${newDomain}`} />
        <meta name="og:title" property="og:title" content={`${store.fantasy}`} />
        <meta property="og:type" content="website" />
        <meta name="description" content={product.description} />
        <meta name="og:description" property="og:description" content={product.description} />
        <meta property="og:image" content={imageProperties.url} />
        <meta property="og:image:width" content={imageProperties.dimensions.width} />
        <meta property="og:image:height" content={imageProperties.dimensions.height} />
        <meta property="og:image:alt" content="uma imagem do produto compartilhado" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${store.fantasy}`} />
        <meta name="twitter:text:title" content={`${store.fantasy}`} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:site" content={'@muleke_kawaii'} />
        <link rel="canonical" href={`${domain.url}`}></link>
        <meta name="viewport" content="width=device-width, initial-scale1" />
        <meta charSet="utf-8" />
        <title>{domain.name}</title>
      </Head>
      {
        // <img src={imageProperties.base64} />
      }
    </>
  );
}

export default ShareProduct;
