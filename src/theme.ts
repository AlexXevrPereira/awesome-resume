import { createTheme } from '@material-ui/core';
import { blue, yellow } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue['400'],
    },
    secondary: {
      main: yellow['400'],
    },
  },
});

export default theme;
