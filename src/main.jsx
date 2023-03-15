import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { KitchenApp } from './KitchenApp';
import { theme } from './theme/theme';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ theme }>
        <CssBaseline/>
        <KitchenApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
