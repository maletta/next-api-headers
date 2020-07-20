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

async function searchProduct(url) {
  return axios
    .get(url)
    .then(response => {
      const productFetched = response.data;
      return {
        code: productFetched.codigo,
        description: productFetched.descricao,
        observation: productFetched.observacao,
        price: productFetched.valorVenda,
        tenantId: productFetched.tenant_id,
        update: productFetched.atualizacao,
      }
    })
    .catch(response => ({
      code: null,
      description: 'Não encontrado',
      observation: 'Não encontrado',
      price: 'Não encontrado',
      tenantId: null,
      update: null,
    }))
}

function getDomain(store, product) {
  if (store.tenantId && product)
    return {
      name: store.fantasy,
      url: process.env.NEXT_APP_CATALOG_URL.replace('USER', store.user),
      parameters: `/item/${product.code}/${slug(product.description)}`,
    }
  else
    return {
      name: 'Smartpos',
      url: 'https://www.smartpos.net.br',
      parameters: '',
    }
}

async function downloadImage(url) {
  const prefixBase64 = `data:image/jpeg;base64, `;
  return axios
    .get(url, {
      responseType: 'arraybuffer'
    })
    .then(response => {
      const buffer = Buffer.from(response.data, 'binary');

      const dimensions = sizeOf(buffer);
      const imageToBase64 = buffer.toString('base64');

      return {
        base64: `${prefixBase64}${imageToBase64}` || '',
        dimensions: dimensions || { width: 0, height: 0 },
        url,
      };
    })
}


async function getImageProperties(product) {
  const imageUrl = product.code ? `https://cdn-dev.smartpos.net.br/product/${product.code}?lastUpdate=${product.update}` :
    "https://null.qa.smartpos.net.br/images/catalogo-share.jpg";

  return downloadImage(imageUrl).then(r => r);
}

export async function getServerSideProps(context) {
  const { params, req, res, query, preview, previewData } = context;

  console.log(`(-----------------------------------------------`);
  console.log("query ", query);
  console.log('req ', `http://${req.headers.host}${req.url}`);


  const newDomain = `http://${req.headers.host}${req.url}`;
  const { storeCode, productCode } = query;

  const stringStoreFetched = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${storeCode}`;
  const store = await searchStore(stringStoreFetched);

  console.log('store ', store);

  const stringProduct = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${store.tenantId}/produtos/${productCode}`;
  const product = await searchProduct(stringProduct);


  const domain = getDomain(store, product);
  const imageProperties = await getImageProperties(product);


  return {
    props: {
      store,
      product,
      domain,
      imageProperties,
      newDomain,
      // image,
      // url,
    },
  }
}

const ShareProduct = (props) => {
  const { store, product, domain, image, imageProperties, newDomain } = props;
  // const url = `https://cdn-dev.smartpos.net.br/product/${product.code}?lastUpdate=${product.update}`;
  // const dimension = imageSize(`https://cdn-dev.smartpos.net.br/product/${product.code}?lastUpdate=${product.update}`)
  // const [img, setImg] = useState()


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
