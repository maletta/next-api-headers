import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import slug from '../../../../../../../utils/slug';
import getImageDimensions from '../../../../../../../utils/imageDimensions';

async function searchStore(url) {
  return axios
    .get(url)
    .then((response) => {
      return {
        tenantId: response.data.id,
        code: response.data.codigo,
        user: response.data.usuario,
        fantasy: response.data.fantasia,
      };
    })
    .catch((response) => ({
      tenantId: null,
      code: null,
      user: null,
      fantasy: null,
    }));
}

async function searchCategory(url) {
  return axios
    .get(url)
    .then((r) => r.data)
    .catch((r) => null);
}

function getDomain(req, store, category) {
  const hostDomain = `https://${req.headers.host}${req.url}`;
  if (store.tenantId && category)
    return {
      name: store.fantasy,
      url: process.env.NEXT_APP_CATALOG_URL.replace('USER', store.user),
      parameters: `?categoria=${category.code}&nome=${category.name}`,
      hostDomain,
    };
  return {
    name: 'Smartpos',
    url: 'https://www.smartpos.net.br',
    parameters: '',
    hostDomain,
  };
}

export async function getServerSideProps(context) {
  const { params, req, res, query, preview, previewData } = context;

  console.log('--', query);

  const { storeCode, categoryCode, categoryName } = query;

  const stringStoreFetched = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${storeCode}`;

  const store = await searchStore(stringStoreFetched);

  const stringSearchCategory = `${process.env.NEXT_APP_IMG_API}/category/${categoryCode}`;

  const category = {
    code: categoryCode,
    name: categoryName,
  };
  const domain = getDomain(req, store, category);
  const imageProperties = await getImageDimensions(stringSearchCategory);

  console.log(imageProperties);

  return {
    props: {
      category,
      domain,
      imageProperties,
      store,
    },
  };
}

const ShareProduct = (props) => {
  const { category, domain, imageProperties, store } = props;

  useEffect(() => {
    // window.location.assign(`${domain.url}${domain.parameters}`);
    // console.log(imageProperties);
  }, []);

  return (
    <>
      <Head>
        <meta property="og:site_name" content={`${domain.name}`} />
        <meta property="og:url" content={`${domain.hostDomain}`} />
        <meta
          name="og:title"
          property="og:title"
          content={`${store.fantasy}`}
        />
        <meta property="og:type" content="website" />
        <meta name="description" content={category.name} />
        <meta
          name="og:description"
          property="og:description"
          content={category.name}
        />
        <meta property="og:image" content={imageProperties.url} />
        <meta
          property="og:image:width"
          content={imageProperties.dimensions.width}
        />
        <meta
          property="og:image:height"
          content={imageProperties.dimensions.height}
        />
        <meta
          property="og:image:alt"
          content="uma imagem do produto compartilhado"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${store.fantasy}`} />
        <meta name="twitter:text:title" content={`${store.fantasy}`} />
        <meta name="twitter:description" content={category.name} />
        <link rel="canonical" href={`${domain.url}`} />
        <meta name="viewport" content="width=device-width, initial-scale1" />
        <meta charSet="utf-8" />
        <title>{domain.name}</title>
      </Head>
    </>
  );
};

export default ShareProduct;
