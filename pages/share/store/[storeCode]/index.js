import React, { useEffect } from 'react'
import router from 'next/router'

const NotFound = () => {


  useEffect(() => {
    const user = router.query.storeCode || '_';
    const domain = {
      url: 'https://USER.qa.smartpos.net.br'.replace('USER', user),
    };
    window.location.assign(domain.url)
  }, [])

  return null;
}


export default NotFound; 
