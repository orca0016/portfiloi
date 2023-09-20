import { createTheme } from "@mui/material/styles";
// import { blue, red } from "@mui/material/colors";

//NOTE Create Custom Theme
export const darkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
        primary: {
            main: "#8be9fd",
        },
        secondary: {
            main: "#bd93f9",
        },
    },
    typography: {
        fontFamily: "tanha, vazir, roboto",
    },
});
export const lightTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
        primary: {
            main: "#8be9fd",
        },
        secondary: {
            main: "#bd93f9",
        },
    },
    typography: {
        fontFamily: "tanha, vazir, roboto",
    },
});

// components: {
//     MuiButtonBase: {
//         defaultProps: {
//             disableRipple: true,
//         },
//     },
//     MuiButton: {
//         variants: [
//             {
//                 props: { variant: "dashed" },
//                 style: {
//                     textTransform: "none",
//                     border: `2px dashed ${blue[500]}`,
//                 },
//             },
//             {
//                 props: { variant: "dashed", color: "secondary" },
//                 style: {
//                     border: `4px dashed ${red[500]}`,
//                 },
//             },
//         ],
//     },
// },