import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#19857b',
    },
    secondary: {
      main: '#556cd6',
    },
    other: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
  },
});
