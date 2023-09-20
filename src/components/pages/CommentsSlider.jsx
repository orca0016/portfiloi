import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { userComments } from "../../constants/details";

const CommentsSlider = () => {
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <>
      <Box
        component={"div"}
        sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}
      >
        <Slider {...options}>
          {userComments.map((user, index) => (
            <Box
              key={index}
              component={"div"}
              sx={{ justifyContent: "center" }}
            >
              <Avatar
                src={user.avatar}
                variant="rounded"
                sx={{
                  width: 100,
                  height: 100,
                  m: "0 auto",
                  borderRadius: "100%",
                }}
              />
              <Typography variant="body1" textAlign="center" color="black">
                {user.fullname}
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                color="black"
                sx={{ mb: 2 }}
              >
                {user.jobtitle}
              </Typography>
              <Card
                sx={{
                  backgroundColor: "lightsalmon",
                  width: 1 / 2,
                  m: " 0 auto",
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <Typography variant="body2" textAlign="center">
                    {user.comment}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default CommentsSlider;
