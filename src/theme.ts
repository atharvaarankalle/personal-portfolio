import { createTheme } from "@mui/material"

export const colors = {
    darkPurple: '#0a0019',
    lightPurple: '#8237eb',
    mutedPurple: '#7f64bd'
}

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.lightPurple
        },
        background: {
            default: colors.darkPurple
        },
    }
})
