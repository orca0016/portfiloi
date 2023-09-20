import { AccountCircle } from "@mui/icons-material";
import { Card, CardContent, Slide, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";

import { CustomDivider } from "../components/common";
import {ContactForm} from "../components/pages";

const Contanct = ({ helmetTitle }) => {
  const wordMap =
    "https://img.freepik.com/free-vector/grey-world-map_1053-431.jpg?size=626&ext=jpg&ga=GA1.1.1468692298.1693819683&semt=ais";
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor="warning.main"
            cColor="warning"
            icon={<AccountCircle />}
            align="center"
            text="ارتباط با من"
          />

          <Grid container sx={{ mt: 5 }}>
            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid xs={12} sm={12} md={8}>
                <Card
                  sx={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ContactForm/>
                </Card>
              </Grid>
            </Slide>

            <Slide
              direction="up"
              in={loading}
              style={{ transitionDelay: loading ? "200ms" : "0ms" }}
            >
              <Grid
                xs={0}
                sm={0}
                md={4}
                sx={{
                  textAlign: "center",
                  backgroundImage: `url(${wordMap})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    fontFamily: "vazir",
                    mt: 4,
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                >
                  بیا تا با هم صحبت کنیم
                </Typography>
                <Typography
                  variant="h6"
                  color="black"
                  sx={{
                    fontFamily: "vazir",
                    mt: 4,
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                >
                  {" "}
                  <a
                    href="mailto:mashhadim901@gmail.com"
                    alt="email"
                    style={{ color: "tomato" }}
                  >
                    ایمیل
                  </a>{" "}
                  بزن به من
                </Typography>
              </Grid>
            </Slide>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Contanct;
