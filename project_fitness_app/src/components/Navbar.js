import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    bgcolor="#b2ebf2"
    width="50rem"
    height="100px"
    borderRadius="30px"
    boxShadow="15"
    border="2px solid #84ffff "
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontWeight:"bold",
          fontFamily:"monospace",
          color: "#3A1212",
          borderBottom: "2px solid #00acc1",
          
          
        }}
      >
        HOME
      </Link>
      <a href="#exercises" style={{ textDecoration: "none",fontWeight:"bold",
          fontFamily:"monospace", color: "#3A1212" }}>
        EXERCISES
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
