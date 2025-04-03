import { createTheme } from '@mui/material/styles';
import { grey, blue, red, brown, green, purple, pink } from '@mui/material/colors';
import { Icon } from '@mui/material';
import { GridColumnHeaderTitle } from '@mui/x-data-grid';

// const theme= createTheme({
//     typography:{
//         fontFamily:"sans-serif"
//     },
//     palette: {
//         primary:{
//             main: '#4A628A',
//         },
//         secondary:{
//             main: '#9B7EBD',
//         },
//     },
//     components:{
//        MuiButton:{
//         styleOverrides:{
//             root:{
//                 backgroundColor:"skyblue"
//             }
//         }
//        } 
//     }
// });

// export default theme;

const changeMode = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? 
        {
           
            primary: {
              main: '#0D92F4',
            },
            secondary: {
              main: '#e91e63',
            },
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
            text: {
              primary: '#000000',
              secondary: grey[700],
            },
          }
        : 
        {
            
            primary: {
              main: '#e91e63',
            },
            secondary: {
              main: '#00e5ff',
            },
            background: {
              default: '#121212',
              paper: '#1d1d1d',
            },
            text: {
              primary: '#ffffff',
              secondary: grey[500],
            },
          }),
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: 16,
      caption: {
        color: mode === 'light' ? blue[700] : red[500],
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            color: mode === 'light' ? grey[200] : blue[100],
            backgroundColor: mode === 'light' ? (value) => value.palette.primary.main : pink[500],
            fontSize: 16,
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? grey[100] : grey[800],
            color: mode === 'light' ? blue[700] : red[500],
            
          },
        },
      },

    },
  });
  
  export const getTheme = (mode) => createTheme(changeMode(mode));

