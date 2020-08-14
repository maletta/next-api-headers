import React from 'react';
import Head from '../src/components/Head';

export async function getServerSideProps() {
  const properties = {
    description: 'Healthcheck',
    imageWidth: null,
    imageHeight: null,
    imageUrl: `${process.env.NEXT_APP_CATALOG_URL}/images/catalogo-share.jpg`,
    siteName: 'Smartpos',
    siteUrl: 'https://www.smartpos.net.br/',
    title: 'Smartpos',
  };

  return {
    props: { ...properties },
  };
}

const Index = (props) => {
  return <Head {...props} />;
};

export default Index;
