import { createTheme } from "@mui/material"

export const colors = {
    darkPurple: '#0a0019',
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
            default: colors.darkPurple
        }
    },
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(',')
    }
})
