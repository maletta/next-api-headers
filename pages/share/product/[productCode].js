import Head from 'next/head';
import React, { useEffect } from 'react';
import axios from 'axios';

import slug from '../../../utils/slug';
import getImageDimensions from '../../../utils/imageDimensions';

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
    .catch(() => ({
      tenantId: null,
      code: null,
      user: null,
      fantasy: 'Smartpos',
    }));
}

async function searchProduct(url) {
  return axios
    .get(url)
    .then((response) => {
      const productFetched = response.data;
      return {
        code: productFetched.codigo,
        description: productFetched.descricao,
        observation: productFetched.observacao,
        tenantId: productFetched.tenant_id,
        update: productFetched.atualizacao,
      };
    })
    .catch(() => ({
      code: null,
      description: 'Não encontrado',
      observation: 'Não encontrado',
      tenantId: null,
      update: null,
    }));
}

function getDomain(req, store, product) {
  const hostDomain = `https://${req.headers.host}${req.url}`;
  if (store.tenantId && product)
    return {
      name: store.fantasy,
      url: process.env.NEXT_APP_CATALOG_URL.replace('USER', store.user),
      parameters: `/item/${product.code}/${slug(product.description)}`,
      hostDomain,
    };
  return {
    name: 'Smartpos',
    url: 'https://www.smartpos.net.br',
    parameters: '',
    hostDomain,
  };
}

async function getImageProperties(product) {
  const imageUrl = product.code
    ? `${process.env.NEXT_APP_IMG_API_CDN}/product/${product.code}?lastUpdate=${product.update}`
    : 'https://null.qa.smartpos.net.br/images/catalogo-share.jpg';

  return getImageDimensions(imageUrl).then((r) => r);
}

export async function getServerSideProps(context) {
  const { req, query } = context;

  const { storeCode, productCode } = query;

  const stringStoreFetched = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${storeCode}`;
  const store = await searchStore(stringStoreFetched);

  const stringProduct = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${store.tenantId}/produtos/${productCode}`;
  const product = await searchProduct(stringProduct);

  const domain = getDomain(req, store, product);
  const imageProperties = await getImageProperties(product);

  return {
    props: {
      store,
      product,
      domain,
      imageProperties,
    },
  };
}

const ShareProduct = (props) => {
  const { store, product, domain, imageProperties } = props;

  useEffect(() => {
    // window.location.assign(`${domain.url}${domain.parameters}`);
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
        <meta name="description" content={product.description} />
        <meta
          name="og:description"
          property="og:description"
          content={product.description}
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
        <meta name="twitter:description" content={product.description} />
        <link rel="canonical" href={`${domain.url}`} />
        <meta name="viewport" content="width=device-width, initial-scale1" />
        <meta charSet="utf-8" />
        <title>{domain.name}</title>
      </Head>
    </>
  );
};

export default ShareProduct;
