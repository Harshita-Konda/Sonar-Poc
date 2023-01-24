import { createTheme } from '@mui/material/styles';
import { purple, grey } from '@mui/material/colors';

const theme = createTheme({
    typography:{
        h1:{

        },
        h5:{
            
        }
    },
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: grey[500],
    },
  },
});


export default theme;