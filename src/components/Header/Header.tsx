import { Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <Typography
        sx={{ fontSize: 30 }}
        variant="h1"
        component="h1"
        gutterBottom
      >
        My List
      </Typography>
    </div>
  );
};

export default Header;
