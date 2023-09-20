import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import Grid from "@mui/material/Unstable_Grid2";

import { darkTheme , lightTheme } from "./theme";


//NOTE Create RTL Cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children , mode }) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={mode ? darkTheme : lightTheme}>
                <HelmetProvider>
                    {/* Grid System */}
                    <Grid container sx={{ height: "100vh" }}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout;
