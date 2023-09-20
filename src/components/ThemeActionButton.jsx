import { useContext } from "react";

import { useTheme } from "@emotion/react";
import { NightlightOutlined, WbSunnyOutlined } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";

import mainContext from "../context";

const ThemeActionButton = () => {
  const theme = useTheme(mainContext);
  const { handleThemeChanghe } = useContext(mainContext);

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Fab aria-label="ThemeChanger "
        variant="extended"
        size='small'
        color="secondary"
        onClick={handleThemeChanghe}
        sx={{ml:2 , color:"whitesmoke"}}>
            {theme.palette.mode ==="dark" ? <WbSunnyOutlined sx={{mr:1}}/> : <NightlightOutlined sx={{mr:1}}/>}
            {theme.palette.mode ==="dark" ? "تم روز" : "تم شب "}
        </Fab>
      </Box>
    </>
  );
};

export default ThemeActionButton;
