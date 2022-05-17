import {
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { NextPageWithLayout } from "../types/next";
import AppBarLayout from "../layouts/AppBarLayout";

const HomePage: NextPageWithLayout = () => {
  return (
    <Box mt={4}>
      <Card>
        <CardHeader
          title="PublicKey"
          subheader="0x0aBBC0c7d0ecdeC69b67c548DE05d0eF51f7D165"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6">0 ETH</Typography>
          <Typography variant="body1">$0.00 USD</Typography>
          <Box my={2}>
            <Button variant="contained">기부하기</Button>
          </Box>
          <hr />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                target="_blank"
                href="https://ropsten.etherscan.io/tx/0xce94e49a5ea212aec97f2e5d0d437cf8b3491c6a8a9214ba1516c08f4f1a6d31"
              >
                <ListItemText
                  primary={`(${new Date().toLocaleDateString()}) Transaction Hash\n0xce94e49a5ea212aec97f2e5d0d437cf8b3491c6a8a9214ba1516c08f4f1a6d31`}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                target="_blank"
                href="https://ropsten.etherscan.io/tx/0xce94e49a5ea212aec97f2e5d0d437cf8b3491c6a8a9214ba1516c08f4f1a6d31"
              >
                <ListItemText
                  primary={`(${new Date().toLocaleDateString()}) Transaction Hash\n0xce94e49a5ea212aec97f2e5d0d437cf8b3491c6a8a9214ba1516c08f4f1a6d31`}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

HomePage.Layout = AppBarLayout;

export default HomePage;
