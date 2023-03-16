import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { store } from './store/store';
import { KitchenApp } from './KitchenApp';
import { theme } from './theme/theme';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={ theme }>
          <CssBaseline/>
          <KitchenApp />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
