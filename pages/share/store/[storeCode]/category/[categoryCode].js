import Head from "next/head";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import sizeOf from 'buffer-image-size';

import slug from '../../../../../utils/slug';

async function searchStore(url) {
  return axios
    .get(url)
    .then(response => {
      return {
        tenantId: response.data.id,
        code: response.data.codigo,
        user: response.data.usuario,
        fantasy: response.data.fantasia,
      }
    }
    ).catch(response => ({
      tenantId: null,
      code: null,
      user: null,
      fantasy: null,
    }))
}

async function searchCategory(url) {
  return axios.
    get(url)
    .then(r => r.data)
    .catch(r => null)
}



export async function getServerSideProps(context) {
  const { params, req, res, query, preview, previewData } = context;

  const { storeCode, categoryCode } = query;

  const stringStoreFetched = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${storeCode}`;

  const store = await searchStore(stringStoreFetched);

  const stringSearchCategory = `${process.env.NEXT_APP_MAIN_API}/categoria/${categoryCode}`;

  // preciso de autorização, token autorizathion para buscar o catálogo 
  const category = await searchCategory(stringSearchCategory);

  const stringImage = `${process.env.NEXT_APP_IMG_API_CDN}/category/${category.codigo}?lastUpdate=${category.atualizacao}`

  const domain = {};
  const imageProperties = {};


  return {
    props: {
      domain,
      store,
    },
  }
}

const ShareProduct = (props) => {
  const { domain, store, product, imageProperties } = props;

  useEffect(() => {
    // window.location.assign(`${domain.url}${domain.parameters}`);
    console.log(imageProperties);
  }, [])

  return (
    <>
      <Head>
        <meta property="og:site_name" content={`${'em desenvolvimento'}`} />
        <meta property="og:url" content={`${'em desenvolvimento'}`} />
        <meta name="og:title" property="og:title" content={`${store.fantasy}`} />
        <meta property="og:type" content="website" />
        <meta name="description" content={'em desenvolvimento'} />
        <meta name="og:description" property="og:description" content={'em desenvolvimento'} />
        <meta property="og:image" content={'em desenvolvimento'} />
        <meta property="og:image:width" content={'em desenvolvimento'} />
        <meta property="og:image:height" content={'em desenvolvimento'} />
        <meta property="og:image:alt" content="uma imagem do produto compartilhado" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${store.fantasy}`} />
        <meta name="twitter:text:title" content={`${store.fantasy}`} />
        <meta name="twitter:description" content={'em desenvolvimento'} />
        <meta name="twitter:site" content={'@muleke_kawaii'} />
        <link rel="canonical" href={`${'em desenvolvimento'}`}></link>
        <meta name="viewport" content="width=device-width, initial-scale1" />
        <meta charSet="utf-8" />
        <title>{'em desenvolvimento'}</title>
      </Head>
    </>
  );
}

export default ShareProduct;
