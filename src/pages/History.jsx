import React from "react";
import Header from "../global/Header";
import { Box } from "@mui/material";

const History = () => {
  return (
    <Box m="20px" className="product-lists">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="History" />
      </Box>
    </Box>
  );
};

export default History;
