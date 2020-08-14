import React, { useEffect } from 'react';
import router from 'next/router';
import styled from 'styled-components';

import Head from '../src/components/Head';
import { getStoreNameFromBrowser } from '../src/utils/getStoreName';
import GlobalStyles from '../src/Styles/GlobalStyles';
// import store from '../src/assets/online-store.png';

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.75rem;
  padding-bottom: 150px;

  @media (max-width: 720px) {
    font-size: 1.75rem;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ebebeb;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

export async function getStaticProps() {
  const properties = {
    description: 'Loja não encontrada',
    imageAlt: 'imagem genérica que representa o catálogo da Smartpos',
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
  useEffect(() => {
    const storeCode = getStoreNameFromBrowser();
    const storeParam = router.query.store;
    const user = storeCode || storeParam;

    if (user) {
      const domain = `${process.env.NEXT_APP_CATALOG_URL}`.replace(
        'USER',
        user
      );

      window.location.assign(domain);
    }
  }, []);

  return (
    <>
      <Head {...props} />
      <GlobalStyles />
      <Container>
        {/* <Image>
          <img src={store} alt="store" width="300px" />
        </Image> */}
        <Text>
          <span>Loja não encontrada.</span>
        </Text>
        <Footer>
          <strong>SmartPOS</strong>
        </Footer>
      </Container>
    </>
  );
};

export default Index;
