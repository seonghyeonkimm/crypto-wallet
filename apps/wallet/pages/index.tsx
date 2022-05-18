import * as React from "react";
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
import Link from "next/link";

const HomePage: NextPageWithLayout = () => {
  const [data, setData] = React.useState<{ address: string; balance: string }>({
    address: "-",
    balance: "0",
  });

  React.useEffect(() => {
    fetch("/api/wallet", { method: "GET" }).then((response) => {
      response.json().then((result) => setData(result));
    });
  }, []);

  return (
    <Box mt={4}>
      <Card>
        <CardHeader
          title="PublicKey"
          subheader={
            <Link href={`https://ropsten.etherscan.io/address/${data.address}`}>
              <a target="_blank">{data.address}</a>
            </Link>
          }
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6">{data.balance} ETH</Typography>
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
