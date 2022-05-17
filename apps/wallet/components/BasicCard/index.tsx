import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  action: React.ReactNode;
  icon?: React.ReactNode;
};

const BasicCard: FC<Props> = ({ title, description, action, icon }) => {
  return (
    <Card sx={{ padding: 4 }}>
      <CardContent>
        <Box textAlign="center">
          {icon}
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>{action}</CardActions>
    </Card>
  );
};

export default BasicCard;
