import { Box, Typography, useTheme ,Fab} from "@mui/material";
import { tokens } from "../theme";


const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px" display="flex" justifyContent="space-between">
        <Fab color="#771de2 " >{icon}</Fab>
    

      <Box mt="2px">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;