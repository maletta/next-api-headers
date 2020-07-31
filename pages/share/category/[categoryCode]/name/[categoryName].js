import React, { useEffect } from 'react';
import axios from 'axios';

import Head from '../../../../../src/components/Head';
import getImageDimensions from '../../../../../src/utils/imageDimensions';
import getStoreNameFromServer from '../../../../../src/utils/getStoreName';

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
      fantasy: null,
    }));
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
  const { req, query } = context;

  const { storeCode, categoryCode, categoryName } = query;

  const storeFromUrl = getStoreNameFromServer(req.headers.host) || storeCode;

  const stringStoreFetched = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${storeFromUrl}`;

  const store = await searchStore(stringStoreFetched);

  const stringSearchCategory = `${process.env.NEXT_APP_IMG_API}/category/${categoryCode}`;

  const category = {
    code: categoryCode,
    name: categoryName,
  };
  const domain = getDomain(req, store, category);
  const imageProperties = await getImageDimensions(stringSearchCategory);

  const headProps = {
    description: category.name,
    imageAlt: 'uma imagem do produto compartilhado',
    imageHeight: imageProperties.dimensions.height,
    imageUrl: imageProperties.url,
    imageWidth: imageProperties.dimensions.width,
    siteName: domain.name,
    siteUrl: domain.hostDomain,
    title: store.fantasy,
  };

  return {
    props: {
      domain,
      headProps,
    },
  };
}

const ShareProduct = (props) => {
  const { domain, headProps } = props;

  useEffect(() => {
    // window.location.assign(`${domain.url}${domain.parameters}`);
    // console.log(imageProperties);
  }, []);

  return (
    <>
      <Head {...headProps} />
    </>
  );
};

export default ShareProduct;
