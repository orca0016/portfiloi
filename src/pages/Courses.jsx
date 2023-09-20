import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { SchoolRounded } from "@mui/icons-material";

import { grey } from "@mui/material/colors";
import { CustomDivider } from "../components/common";
import { ShowCourses } from "../components/pages";

const Courses = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor:
          theme.palette.mode === "dark" ? grey[600] : "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="secondary.main"
          cColor="secondary"
          icon={<SchoolRounded />}
          align="center"
          text="دوره های من"
        />

        <Grid container sx={{ mx: 3, mt: 4 }}>
          {/* Show courses */}
          <ShowCourses loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Courses;
