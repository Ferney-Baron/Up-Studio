import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#fbfbfb',
            main: '#282828',
            gray: '#cfd8dc',
            lightGray: '#eceff1',
        },

        secondary: {
            main: '#ff0045',
            orange: '#ff640d',
            red: '#ff0045',
            green: '#9ecd2a',
            yellow: '#ffa743',
        },
    },

    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        fontFamily: "Arial",
                        backgroundColor: "#f5f5f5",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#c2c2c2",
                            borderWidth: "1px",
                        },
                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "secondary.main",
                                borderWidth: "2px",
                            },
                        },
                        "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#ccc",
                            },
                        },
                    },
                    "& .MuiInputLabel-outlined": {
                        color: "#2e2e2e",
                        "&.Mui-focused": {
                            color: "secondary.main",
                        },
                    },
                }
            }
        }
    }
});