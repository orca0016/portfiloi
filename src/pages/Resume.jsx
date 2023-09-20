import {
  HomeRepairServiceRounded,
  SchoolRounded,
  SettingsEthernetRounded,
} from "@mui/icons-material";

import {
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { grey } from "@mui/material/colors";
import { CustomDivider } from "../components/common";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";

const Resume = ({ helmetTitle }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

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
              bColor="error.main"
              cColor="error"
              icon={<SettingsEthernetRounded />}
              align="center"
              text="رزومه"
            />
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات"
            />
           <DevExpTimeline  loading={loading}/>
          </Grid>

          <Grid xs={6}>
            <CustomDivider
              bColor="info.main"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات"
            />

            <DevEduTimeline loading={loading}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
