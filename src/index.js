import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
    <HelmetProvider>
          <Routes />
    </HelmetProvider>,
  document.getElementById('root')
);
