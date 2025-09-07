import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {

  // Framework7 Parameters
  const f7params = {
    name: 'Workout App', // App name
      theme: 'ios', // Automatic theme detection




      // App store
      store: store,
      // App routes
      routes: routes,

      // Register service worker (only on production build)
      serviceWorker: process.env.NODE_ENV ==='production' ? {
        path: '/service-worker.js',
      } : {},
  };
  f7ready(() => {


    // Call F7 APIs here
  });

  return (
    <App { ...f7params }>
        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />
    </App>
  )
}
export default MyApp;