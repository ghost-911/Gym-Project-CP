import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" }, boxShadow: 20 }}
    position="relative"
    p="20px"
    bgcolor="#e0f7fa"
    
  >
    <Typography color="#00acc1" fontWeight="600" fontSize="26px">
      Health & Wellness Hub
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Dedicate, Develop, <br />
      And Dominate
    </Typography>
    <Typography fontSize="22px" fontFamily="inherit" fontWeight="500" lineHeight="35px" >
      Your Fitness, Your Way: Customized Exercises for You.
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#4dd0e1",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "black",
          borderRadius: "24px",
          
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
