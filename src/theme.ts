import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const theme = createTheme({
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
          main: 'rgba(29, 161, 242)',
          dark: 'rgba(29, 161, 242)',
          contrastText: '#fff',
        },
        secondary: {
            main: 'rgba(26, 145, 218)',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                fontWeight: 700,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: 'rgba(29, 161, 242)',
            },
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWith: '2px',
                },
                '&:before': {
                    borderColor: '#000',
                    borderBottomWith: '2px',
                },
            },
            input: {
                backgroundColor: 'rgba(245, 248, 250)',
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 15,
            },
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgba(204, 204, 204)',
                marginBottom: 10,
                padding: '10px 15px',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800,
                },
                '& button': {
                    padding: 8,
                    marginRight: 20,
                },
            },
        },
    },
});