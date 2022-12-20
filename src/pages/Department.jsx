import { Box } from "@mui/material";

import Header from "../global/Header";

const Department = () => {
  return (
    <Box m="20px" className="product-lists">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title=" Department" />
      </Box>
    </Box>
  );
};

export default Department;
