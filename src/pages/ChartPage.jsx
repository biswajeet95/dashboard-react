import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../global/Header";
import AreaChart from "../components/AreaChart";
import { SpiderChart } from "../components/SpiderChart";
import { ColumnChart } from "../components/ColumnChart";

const ChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" className="product-lists">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Charts" />
      </Box>

      <Box
        className="product-lists"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            height="26vh"
          >
            <AreaChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Today Admitted
          </Typography>
          <Box height="250px" mt="-20px">
            <ColumnChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          ></Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            height="26vh"
          >
            <SpiderChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChartPage;
