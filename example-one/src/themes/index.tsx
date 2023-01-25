import { createTheme } from '@mui/material/styles';
import { purple, grey } from '@mui/material/colors';


declare module "@mui/material/styles"{
    interface TypographyVariants {
        h1:React.CSSProperties,
    }
}
const theme = createTheme({
    typography:{
        h1:{
            fontWeight:600,
            fontSize:"22px",
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