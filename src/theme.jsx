import { extendTheme } from "@chakra-ui/react";


const config = {
initialColorMode: "light",
useSystemColorMode: false,
};


const colors = {
brand: {
50: "#eef5ff",
100: "#d7e6ff",
200: "#b1cdff",
300: "#86b1ff",
400: "#5b96ff",
500: "#2f7bff", // primary
600: "#1e5fdb",
700: "#174bb0",
800: "#123986",
900: "#0b275c",
},
};


export const theme = extendTheme({ config, colors });