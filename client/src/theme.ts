import { type ThemeOptions, createTheme } from "@mui/material/styles";
import { type SystemStyleObject } from "@mui/system";

export const cardSize = 320;
export const CardSizeXs = 360;
export const gutterSize = 16; 

function gridWidth(cols: number): number {
  if (cols === 1) return CardSizeXs;
  return (cardSize * cols) + (gutterSize * (cols - 1));
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#999999',
    },
    secondary: {
      main: '#aaaaaa',
      contrastText: '#ffffff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161'
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14
  },
  spacing: 8,
  shape: {
    borderRadius: 4
  },
  transitions: {
    duration: {
      standard: 300
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'capitalize'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '2rem',
          fontWeight: 600
        },
        h3: {
          fontSize: '1.6rem',
          fontWeight: 600
        },
        h4: {
          fontSize: '1.2rem',
        },
        h5: {
          fontSize: '1.2rem',
          fontWeight: 600
        },
        h6: {
          fontSize: '1.1rem',
        },
      },
    },
    MuiChip: {
      defaultProps: {
        style: {
          borderRadius: '0.3rem',
        }
      },
    },
    MuiToolbar: {
      defaultProps: {
        style: {
          backgroundColor: '#f5f5f5',
          margin: '0 auto',
        }
      },
    },
  }
};

const theme = createTheme(themeOptions);

export const constrainedGridWidth: SystemStyleObject<typeof theme> = {
  [`@media (min-width: ${gridWidth(4)}px)`]: { width: `${gridWidth(4)}px` },
  [`@media (max-width: ${gridWidth(4)}px)`]: { width: `${gridWidth(3)}px` },
  [`@media (max-width: ${gridWidth(3)}px)`]: { width: `${gridWidth(2)}px` },
  [`@media (max-width: ${gridWidth(2)}px)`]: { width: `${gridWidth(1)}px` }
};

export default theme;
