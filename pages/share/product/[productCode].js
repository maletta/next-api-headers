import React, { useEffect } from 'react';
import axios from 'axios';
import Head from '../../../src/components/Head';
import slug from '../../../src/utils/slug';
import getImageDimensions from '../../../src/utils/imageDimensions';
import getStoreNameFromServer from '../../../src/utils/getStoreName';

async function searchStore(url) {
  let store = null;
  try {
    store = axios.get(url).then((response) => {
      return {
        tenantId: response.data.id,
        code: response.data.codigo,
        user: response.data.usuario,
        fantasy: response.data.fantasia,
      };
    });
  } catch (err) {
    store = {
      tenantId: null,
      code: null,
      user: null,
      fantasy: 'Smartpos',
    };
  }

  return store;
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
    : `${process.env.NEXT_APP_CATALOG_URL}/images/catalogo-share.jpg`;

  return getImageDimensions(imageUrl).then((r) => r);
}

export async function getServerSideProps(context) {
  const { req, query } = context;

  const { productCode, storeCode } = query;

  const storeFromUrl = getStoreNameFromServer(req.headers.host) || storeCode;

  const store = await searchStore(
    `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${storeFromUrl}`
  );

  const product = await searchProduct(
    `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${store.tenantId}/produtos/${productCode}`
  );

  const domain = getDomain(req, store, product);

  const imageProperties = await getImageProperties(product);

  const headProps = {
    description: product.description,
    imageAlt: 'uma imagem do produto compartilhado',
    imageHeight: imageProperties.dimensions.height,
    imageUrl: imageProperties.url,
    imageWidth: imageProperties.dimensions.width,
    siteName: domain.name,
    siteUrl: domain.hostDomain,
    title: store.fantasy,
  };

  return {
    props: { headProps, domain },
  };
}

const ShareProduct = (props) => {
  const { domain, headProps } = props;

  useEffect(() => {
    window.location.assign(`${domain.url}${domain.parameters}`);
  }, []);

  return <Head {...headProps} />;
};

export default ShareProduct;
