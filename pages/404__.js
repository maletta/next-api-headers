import React, { useEffect } from 'react'
import slug from '../utils/slug';
import router from 'next/router'

const NotFound = () => {


  useEffect(() => {
    const user = router.query.storeCode || '_';
    const domain = {
      url: 'https://USER.qa.smartpos.net.br'.replace('USER', user),
    };

    // window.location.assign(domain)
  }, [])

  return null;
}


export default NotFound; 
