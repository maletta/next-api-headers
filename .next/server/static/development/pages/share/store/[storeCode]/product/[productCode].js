module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/share/store/[storeCode]/product/[productCode].js":
/*!****************************************************************!*\
  !*** ./pages/share/store/[storeCode]/product/[productCode].js ***!
  \****************************************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\maletta\\projetos\\js\\next-api-headers\\pages\\share\\store\\[storeCode]\\product\\[productCode].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



async function getServerSideProps(context) {
  const {
    params,
    req,
    res,
    query,
    preview,
    previewData
  } = context;
  console.error('-------------------------');
  console.log("query ", query);
  const {
    storeCode,
    productCode
  } = query; // tratar erro de store não encontrada

  const stringStoreFetched = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${storeCode}`;
  const storeFetched = await fetch(stringStoreFetched).then(r => r.json());
  const store = {
    tenantId: storeFetched.id || '',
    code: storeFetched.codigo || '',
    user: storeFetched.usuario || '',
    fantasy: storeFetched.fantasia || ''
  };
  const id = store.tenantId;
  const idTeste = '3957a42e-74eb-4095-a662-70c01c346689';
  console.log('store ', store); //tratar erro de produto e store não encontrados

  const stringProduct = `${process.env.NEXT_APP_SERVICE_API}/catalog/v1/loja/${store.tenantId}/produtos/${productCode}`;
  const productFetched = await fetch(stringProduct).then(r => r.json()); //console.log('stringProduct ', stringProduct);

  console.log('productFetched ', productFetched);
  const product = {
    code: productFetched.codigo || '',
    description: productFetched.descricao || '',
    observation: productFetched.observacao || '',
    price: productFetched.valorVenda || '',
    tenantId: productFetched.tenant_id || '',
    update: productFetched.atualizacao || ''
  }; // console.log(process.env);

  const stringFetchedImage = `${process.env.NEXT_APP_PHOTO_SERVICE}/list/?tenant_id=${id}&id=${productCode}`;
  const productImagesFetched = await fetch(stringFetchedImage).then(r => r.json()).catch();
  const [image] = productImagesFetched;
  console.log('image ', image);
  return {
    props: {
      store,
      product,
      image
    }
  };
}

const ShareProduct = props => {
  const {
    store,
    product,
    image
  } = props; // const imageURL = `${process.env.NEXT_APP_IMG_API_CDN}/?tenant_id=${image.key}&last_modified=${image.lastModified}`;

  const imageURL = `${process.env.NEXT_APP_IMG_API_CDN}/product=${product.code}&lastUpdate=${product.update}`;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_Head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("meta", {
    property: "og:site_name",
    content: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "localhost:3000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: store.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: product.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: product.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: imageURL,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:alt",
    content: "descrever imagem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:type",
    content: "image/jpeg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: store.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: product.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:site",
    content: "localhost:3000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "maletta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "\"Primeiro site next\"")), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "SSR"), __jsx("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "SSR teste 2")));
};

/* harmony default export */ __webpack_exports__["default"] = (ShareProduct);

/***/ }),

/***/ 3:
/*!**********************************************************************!*\
  !*** multi ./pages/share/store/[storeCode]/product/[productCode].js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\maletta\projetos\js\next-api-headers\pages\share\store\[storeCode]\product\[productCode].js */"./pages/share/store/[storeCode]/product/[productCode].js");


/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2hhcmUvc3RvcmUvW3N0b3JlQ29kZV0vcHJvZHVjdC9bcHJvZHVjdENvZGVdLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvSGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGFyYW1zIiwicmVxIiwicmVzIiwicXVlcnkiLCJwcmV2aWV3IiwicHJldmlld0RhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJzdG9yZUNvZGUiLCJwcm9kdWN0Q29kZSIsInN0cmluZ1N0b3JlRmV0Y2hlZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX0FQUF9TRVJWSUNFX0FQSSIsInN0b3JlRmV0Y2hlZCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwic3RvcmUiLCJ0ZW5hbnRJZCIsImlkIiwiY29kZSIsImNvZGlnbyIsInVzZXIiLCJ1c3VhcmlvIiwiZmFudGFzeSIsImZhbnRhc2lhIiwiaWRUZXN0ZSIsInN0cmluZ1Byb2R1Y3QiLCJwcm9kdWN0RmV0Y2hlZCIsInByb2R1Y3QiLCJkZXNjcmlwdGlvbiIsImRlc2NyaWNhbyIsIm9ic2VydmF0aW9uIiwib2JzZXJ2YWNhbyIsInByaWNlIiwidmFsb3JWZW5kYSIsInRlbmFudF9pZCIsInVwZGF0ZSIsImF0dWFsaXphY2FvIiwic3RyaW5nRmV0Y2hlZEltYWdlIiwiTkVYVF9BUFBfUEhPVE9fU0VSVklDRSIsInByb2R1Y3RJbWFnZXNGZXRjaGVkIiwiY2F0Y2giLCJpbWFnZSIsInByb3BzIiwiU2hhcmVQcm9kdWN0IiwiaW1hZ2VVUkwiLCJORVhUX0FQUF9JTUdfQVBJX0NETiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRU8sZUFBZUEsa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFFBQU07QUFBRUMsVUFBRjtBQUFVQyxPQUFWO0FBQWVDLE9BQWY7QUFBb0JDLFNBQXBCO0FBQTJCQyxXQUEzQjtBQUFvQ0M7QUFBcEMsTUFBb0ROLE9BQTFEO0FBRUFPLFNBQU8sQ0FBQ0MsS0FBUixDQUFjLDJCQUFkO0FBR0FELFNBQU8sQ0FBQ0UsR0FBUixDQUFZLFFBQVosRUFBc0JMLEtBQXRCO0FBQ0EsUUFBTTtBQUFFTSxhQUFGO0FBQWFDO0FBQWIsTUFBNkJQLEtBQW5DLENBUGdELENBU2hEOztBQUNBLFFBQU1RLGtCQUFrQixHQUFJLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxvQkFBcUIsb0JBQW1CTCxTQUFVLEVBQTVGO0FBRUEsUUFBTU0sWUFBWSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsa0JBQUQsQ0FBTCxDQUEwQk0sSUFBMUIsQ0FBK0JDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQXBDLENBQTNCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHO0FBQ1pDLFlBQVEsRUFBRU4sWUFBWSxDQUFDTyxFQUFiLElBQW1CLEVBRGpCO0FBRVpDLFFBQUksRUFBRVIsWUFBWSxDQUFDUyxNQUFiLElBQXVCLEVBRmpCO0FBR1pDLFFBQUksRUFBRVYsWUFBWSxDQUFDVyxPQUFiLElBQXdCLEVBSGxCO0FBSVpDLFdBQU8sRUFBRVosWUFBWSxDQUFDYSxRQUFiLElBQXlCO0FBSnRCLEdBQWQ7QUFPQSxRQUFNTixFQUFFLEdBQUdGLEtBQUssQ0FBQ0MsUUFBakI7QUFDQSxRQUFNUSxPQUFPLEdBQUcsc0NBQWhCO0FBQ0F2QixTQUFPLENBQUNFLEdBQVIsQ0FBWSxRQUFaLEVBQXNCWSxLQUF0QixFQXRCZ0QsQ0F3QmhEOztBQUNBLFFBQU1VLGFBQWEsR0FBSSxHQUFFbEIsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9CQUFxQixvQkFBbUJNLEtBQUssQ0FBQ0MsUUFBUyxhQUFZWCxXQUFZLEVBQXBIO0FBQ0EsUUFBTXFCLGNBQWMsR0FBRyxNQUFNZixLQUFLLENBQUNjLGFBQUQsQ0FBTCxDQUFxQmIsSUFBckIsQ0FBMEJDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQS9CLENBQTdCLENBMUJnRCxDQTJCaEQ7O0FBQ0FiLFNBQU8sQ0FBQ0UsR0FBUixDQUFZLGlCQUFaLEVBQStCdUIsY0FBL0I7QUFFQSxRQUFNQyxPQUFPLEdBQUc7QUFDZFQsUUFBSSxFQUFFUSxjQUFjLENBQUNQLE1BQWYsSUFBeUIsRUFEakI7QUFFZFMsZUFBVyxFQUFFRixjQUFjLENBQUNHLFNBQWYsSUFBNEIsRUFGM0I7QUFHZEMsZUFBVyxFQUFFSixjQUFjLENBQUNLLFVBQWYsSUFBNkIsRUFINUI7QUFJZEMsU0FBSyxFQUFFTixjQUFjLENBQUNPLFVBQWYsSUFBNkIsRUFKdEI7QUFLZGpCLFlBQVEsRUFBRVUsY0FBYyxDQUFDUSxTQUFmLElBQTRCLEVBTHhCO0FBTWRDLFVBQU0sRUFBRVQsY0FBYyxDQUFDVSxXQUFmLElBQThCO0FBTnhCLEdBQWhCLENBOUJnRCxDQXVDaEQ7O0FBRUEsUUFBTUMsa0JBQWtCLEdBQUksR0FBRTlCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZOEIsc0JBQXVCLG9CQUFtQnJCLEVBQUcsT0FBTVosV0FBWSxFQUF6RztBQUNBLFFBQU1rQyxvQkFBb0IsR0FBRyxNQUFNNUIsS0FBSyxDQUFDMEIsa0JBQUQsQ0FBTCxDQUEwQnpCLElBQTFCLENBQStCQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsSUFBRixFQUFwQyxFQUE4QzBCLEtBQTlDLEVBQW5DO0FBRUEsUUFBTSxDQUFDQyxLQUFELElBQVVGLG9CQUFoQjtBQUNBdEMsU0FBTyxDQUFDRSxHQUFSLENBQVksUUFBWixFQUFxQnNDLEtBQXJCO0FBS0EsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTDNCLFdBREs7QUFFTFksYUFGSztBQUdMYztBQUhLO0FBREYsR0FBUDtBQU9EOztBQU1ELE1BQU1FLFlBQVksR0FBSUQsS0FBRCxJQUFXO0FBQzlCLFFBQU07QUFBRTNCLFNBQUY7QUFBU1ksV0FBVDtBQUFrQmM7QUFBbEIsTUFBNEJDLEtBQWxDLENBRDhCLENBRTlCOztBQUNBLFFBQU1FLFFBQVEsR0FBSSxHQUFFckMsT0FBTyxDQUFDQyxHQUFSLENBQVlxQyxvQkFBcUIsWUFBV2xCLE9BQU8sQ0FBQ1QsSUFBSyxlQUFjUyxPQUFPLENBQUNRLE1BQU8sRUFBMUc7QUFFQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFDLGNBQWY7QUFBOEIsV0FBTyxFQUFDLEVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sWUFBUSxFQUFDLFFBQWY7QUFBd0IsV0FBTyxFQUFDLGdCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFlBQVEsRUFBQyxVQUEvQjtBQUEwQyxXQUFPLEVBQUVwQixLQUFLLENBQUNhLFdBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQU0sWUFBUSxFQUFDLFNBQWY7QUFBeUIsV0FBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFRCxPQUFPLENBQUNDLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQU0sUUFBSSxFQUFDLGdCQUFYO0FBQTRCLFlBQVEsRUFBQyxnQkFBckM7QUFBc0QsV0FBTyxFQUFFRCxPQUFPLENBQUNDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFFZ0IsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUU7QUFBTSxZQUFRLEVBQUMsY0FBZjtBQUE4QixXQUFPLEVBQUMsa0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU0sWUFBUSxFQUFDLGVBQWY7QUFBK0IsV0FBTyxFQUFDLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsV0FBTyxFQUFDLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsV0FBTyxFQUFFN0IsS0FBSyxDQUFDYSxXQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRTtBQUFNLFFBQUksRUFBQyxxQkFBWDtBQUFpQyxXQUFPLEVBQUVELE9BQU8sQ0FBQ0MsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBYUU7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixXQUFPLEVBQUMsZ0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWNFO0FBQU0sUUFBSSxFQUFDLGlCQUFYO0FBQTZCLFdBQU8sRUFBQyxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFlRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyxvQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBZ0JFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWpCRixDQURGLEVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixDQXBCRixDQURGO0FBNEJELENBakNEOztBQXdDZWUsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0Esc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNoYXJlXFxzdG9yZVxcW3N0b3JlQ29kZV1cXHByb2R1Y3RcXFtwcm9kdWN0Q29kZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9IZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHBhcmFtcywgcmVxLCByZXMsIHF1ZXJ5LCBwcmV2aWV3LCBwcmV2aWV3RGF0YSB9ID0gY29udGV4dDtcblxuICBjb25zb2xlLmVycm9yKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cblxuICBjb25zb2xlLmxvZyhcInF1ZXJ5IFwiLCBxdWVyeSk7XG4gIGNvbnN0IHsgc3RvcmVDb2RlLCBwcm9kdWN0Q29kZSB9ID0gcXVlcnk7XG5cbiAgLy8gdHJhdGFyIGVycm8gZGUgc3RvcmUgbsOjbyBlbmNvbnRyYWRhXG4gIGNvbnN0IHN0cmluZ1N0b3JlRmV0Y2hlZCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfQVBQX1NFUlZJQ0VfQVBJfS9jYXRhbG9nL3YxL2xvamEvJHtzdG9yZUNvZGV9YFxuICBcbiAgY29uc3Qgc3RvcmVGZXRjaGVkID0gYXdhaXQgZmV0Y2goc3RyaW5nU3RvcmVGZXRjaGVkKS50aGVuKHIgPT4gci5qc29uKCkpXG4gIGNvbnN0IHN0b3JlID0ge1xuICAgIHRlbmFudElkOiBzdG9yZUZldGNoZWQuaWQgfHwgJycsXG4gICAgY29kZTogc3RvcmVGZXRjaGVkLmNvZGlnbyB8fCAnJyxcbiAgICB1c2VyOiBzdG9yZUZldGNoZWQudXN1YXJpbyB8fCAnJyxcbiAgICBmYW50YXN5OiBzdG9yZUZldGNoZWQuZmFudGFzaWEgfHwgJycsXG4gIH07XG5cbiAgY29uc3QgaWQgPSBzdG9yZS50ZW5hbnRJZDtcbiAgY29uc3QgaWRUZXN0ZSA9ICczOTU3YTQyZS03NGViLTQwOTUtYTY2Mi03MGMwMWMzNDY2ODknO1xuICBjb25zb2xlLmxvZygnc3RvcmUgJywgc3RvcmUpO1xuXG4gIC8vdHJhdGFyIGVycm8gZGUgcHJvZHV0byBlIHN0b3JlIG7Do28gZW5jb250cmFkb3NcbiAgY29uc3Qgc3RyaW5nUHJvZHVjdCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfQVBQX1NFUlZJQ0VfQVBJfS9jYXRhbG9nL3YxL2xvamEvJHtzdG9yZS50ZW5hbnRJZH0vcHJvZHV0b3MvJHtwcm9kdWN0Q29kZX1gO1xuICBjb25zdCBwcm9kdWN0RmV0Y2hlZCA9IGF3YWl0IGZldGNoKHN0cmluZ1Byb2R1Y3QpLnRoZW4ociA9PiByLmpzb24oKSk7XG4gIC8vY29uc29sZS5sb2coJ3N0cmluZ1Byb2R1Y3QgJywgc3RyaW5nUHJvZHVjdCk7XG4gIGNvbnNvbGUubG9nKCdwcm9kdWN0RmV0Y2hlZCAnLCBwcm9kdWN0RmV0Y2hlZCk7XG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBjb2RlOiBwcm9kdWN0RmV0Y2hlZC5jb2RpZ28gfHwgJycsXG4gICAgZGVzY3JpcHRpb246IHByb2R1Y3RGZXRjaGVkLmRlc2NyaWNhbyB8fCAnJyxcbiAgICBvYnNlcnZhdGlvbjogcHJvZHVjdEZldGNoZWQub2JzZXJ2YWNhbyB8fCAnJyxcbiAgICBwcmljZTogcHJvZHVjdEZldGNoZWQudmFsb3JWZW5kYSB8fCAnJyxcbiAgICB0ZW5hbnRJZDogcHJvZHVjdEZldGNoZWQudGVuYW50X2lkIHx8ICcnLFxuICAgIHVwZGF0ZTogcHJvZHVjdEZldGNoZWQuYXR1YWxpemFjYW8gfHwgJycsXG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudik7XG5cbiAgY29uc3Qgc3RyaW5nRmV0Y2hlZEltYWdlID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9BUFBfUEhPVE9fU0VSVklDRX0vbGlzdC8/dGVuYW50X2lkPSR7aWR9JmlkPSR7cHJvZHVjdENvZGV9YFxuICBjb25zdCBwcm9kdWN0SW1hZ2VzRmV0Y2hlZCA9IGF3YWl0IGZldGNoKHN0cmluZ0ZldGNoZWRJbWFnZSkudGhlbihyID0+IHIuanNvbigpKS5jYXRjaCgpO1xuXG4gIGNvbnN0IFtpbWFnZV0gPSBwcm9kdWN0SW1hZ2VzRmV0Y2hlZDsgXG4gIGNvbnNvbGUubG9nKCdpbWFnZSAnLGltYWdlKTtcblxuXG5cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzdG9yZSxcbiAgICAgIHByb2R1Y3QsXG4gICAgICBpbWFnZVxuICAgIH0sXG4gIH1cbn1cblxuXG5cblxuXG5jb25zdCBTaGFyZVByb2R1Y3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdG9yZSwgcHJvZHVjdCwgaW1hZ2UgfSA9IHByb3BzO1xuICAvLyBjb25zdCBpbWFnZVVSTCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfQVBQX0lNR19BUElfQ0ROfS8/dGVuYW50X2lkPSR7aW1hZ2Uua2V5fSZsYXN0X21vZGlmaWVkPSR7aW1hZ2UubGFzdE1vZGlmaWVkfWA7XG4gIGNvbnN0IGltYWdlVVJMID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9BUFBfSU1HX0FQSV9DRE59L3Byb2R1Y3Q9JHtwcm9kdWN0LmNvZGV9Jmxhc3RVcGRhdGU9JHtwcm9kdWN0LnVwZGF0ZX1gO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJsb2NhbGhvc3Q6MzAwMFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzdG9yZS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9kdWN0LmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIiBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvZHVjdC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlVVJMfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmFsdFwiIGNvbnRlbnQ9XCJkZXNjcmV2ZXIgaW1hZ2VtXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL2pwZWdcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3N0b3JlLmRlc2NyaXB0aW9ufSAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9kdWN0LmRlc2NyaXB0aW9ufSAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJsb2NhbGhvc3Q6MzAwMFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwibWFsZXR0YVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGUxXCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPHRpdGxlPlwiUHJpbWVpcm8gc2l0ZSBuZXh0XCI8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlNTUjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5TU1IgdGVzdGUgMjwvZGl2PlxuXG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZVByb2R1Y3Q7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9IZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=