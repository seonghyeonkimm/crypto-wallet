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
import { useWeb3 } from "../hooks/useWeb3";

const HomePage: NextPageWithLayout = () => {
  const web3 = useWeb3();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<{
    address: string;
    balance: string;
    txLists: any[];
  }>({
    address: "",
    balance: "0",
    txLists: [],
  });

  const loadWallet = () => {
    setLoading(true);
    fetch("/api/wallet", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const sendEtherToRandomUser = () => {
    setLoading(true);
    web3
      .sendTransaction({
        to: "0x42c033aA6569a14f809F0Fb52566e06651f441BB",
        value: "1",
        from: data.address,
      })
      .then(() => {
        loadWallet();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    loadWallet();
  }, []);

  return (
    <Box mt={4}>
      <Card>
        <CardHeader
          title="PublicKey"
          subheader={
            data.address ? (
              <Link
                href={`https://ropsten.etherscan.io/address/${data.address}`}
              >
                <a target="_blank">{data.address}</a>
              </Link>
            ) : (
              "-"
            )
          }
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6">{data.balance} ETH</Typography>
          <Box my={2}>
            <Button
              disabled={loading}
              variant="contained"
              onClick={sendEtherToRandomUser}
            >
              기부하기
            </Button>
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
