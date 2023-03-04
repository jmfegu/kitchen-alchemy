import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { KitchenApp } from './KitchenApp';
import { kitchenTheme } from './theme/kitchenTheme';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ kitchenTheme }>
        <CssBaseline/>
        <KitchenApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
