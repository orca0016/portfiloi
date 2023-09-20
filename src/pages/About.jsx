import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";

import { Helmet } from "react-helmet-async";

import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";

import { grey } from "@mui/material/colors";
import { CustomAvatar, CustomDivider } from "../components/common";
import { DevInfo, DevWorkCount, Skills } from "../components/pages";

const About = ({ helmetTitle }) => {
  const avatar =
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.2.1468692298.1693819683&semt=sph";

  const theme = useTheme();

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
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="right"
              text="توسعه دهنده فول استک و مدرس برنامه نویسی"
            />

            <Grid container>
              <Grid
                xs={4}
                sm={4}
                md={3}
                lg={3}
                sx={{
                  mt: 3,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              >
                <DevWorkCount />
              </Grid>

              <Grid xs={12} sm={8} md={9} lg={9}>
                <DevInfo />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar avatar={avatar} size={250} fallback="MM" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهارت های من"
            />
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
