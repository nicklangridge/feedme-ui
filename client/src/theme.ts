import "@fontsource/nunito-sans/index.css";
import { type ThemeOptions, createTheme } from "@mui/material/styles";

// Get default shadows so we can override them - feels hacky, better way?
const defaultTheme = createTheme();
const defaultShadows: ThemeOptions['shadows'] = [...defaultTheme.shadows];

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'Nunito Sans, Roboto, sans-serif',
    fontSize: 14
  },
  shadows: defaultShadows.map(() => 'none') as ThemeOptions['shadows'],
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
      default: '#e9e9e9',
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#e9e9e9',
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none'
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
          margin: '0 auto',
        }
      },
    }
  }
};

const theme = createTheme(themeOptions);
export default theme;
