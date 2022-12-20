import Header from "../global/Header";
import { Box } from "@mui/material";

const Settings = () => {
  return (
    <Box m="20px" className="product-lists">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Settings" />
      </Box>
    </Box>
  );
};

export default Settings;
