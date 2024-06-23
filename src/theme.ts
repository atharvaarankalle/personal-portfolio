import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
    interface Palette {
        mutedPurple: Palette["primary"];
    }

    interface PaletteOptions {
        mutedPurple?: PaletteOptions["primary"];
    }
}

export const colors = {
    darkestPurple: '#0a0019',
    darkPurple: '#140026',
    lightPurple: '#8237eb',
    lighestPurple: '#d8b8ff',
    mutedPurple: '#7f64bd',
}

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.lightPurple
        },
        secondary: {
            main: colors.lighestPurple
        },
        background: {
            default: colors.darkestPurple,
            paper: colors.darkPurple
        },
        mutedPurple: {
            main: colors.mutedPurple
        }
    },
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(',')
    }
})
