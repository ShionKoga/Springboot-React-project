import React from 'react';
import ReactDOM from 'react-dom';
import AppNavigation from "./AppNavigation";
import {NetworkArticlesRepo} from "./NetworkArticlesRepo";
import NetworkHttp from "./networking/NetworkHttp";

const appProps = {
    articleRepo: new NetworkArticlesRepo(
        new NetworkHttp()
    )
}

ReactDOM.render(
  <React.StrictMode>
    <AppNavigation appProps={appProps}/>
  </React.StrictMode>,
  document.getElementById('root')
);