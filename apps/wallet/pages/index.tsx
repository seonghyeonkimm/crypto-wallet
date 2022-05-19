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

type TransactionReceipt = Awaited<
  ReturnType<ReturnType<typeof useWeb3>["sendTransaction"]>
>;

const HomePage: NextPageWithLayout = () => {
  const web3 = useWeb3();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<{
    address: string;
    balance: string;
  }>({
    address: "",
    balance: "0",
  });
  const [txList, setTxList] = React.useState<TransactionReceipt[]>([]);

  const loadWallet = React.useCallback(async () => {
    const response = await fetch("/api/wallet", { method: "GET" });
    const { address } = await response.json();
    const balance = await web3.getBalance(address);
    setData({ address, balance });
  }, [web3]);

  const sendEtherToRandomUser = async () => {
    setLoading(true);
    try {
      const txResult = await web3.sendTransaction({
        to: "0x96B5834632ea9546bA0C990574Ba8e348603F93c",
        value: "1",
        from: data.address,
      });

      loadWallet();
      setTxList((prev) => [...prev, txResult]);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadWallet();
  }, [loadWallet]);

  return (
    <Box mt={4}>
      <Card>
        <CardHeader
          sx={{ wordBreak: "break-all" }}
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
          {txList.length === 0 && (
            <Typography variant="h6" sx={{ marginTop: 4 }}>
              처리된 거래가 없습니다.
            </Typography>
          )}
          <List>
            {txList.map((tx, txIndex) => {
              return (
                <ListItem disablePadding key={tx.transactionHash}>
                  <ListItemButton
                    component="a"
                    target="_blank"
                    href={`https://ropsten.etherscan.io/tx/${tx.transactionHash}`}
                  >
                    <ListItemText
                      primary={`(${txIndex + 1}) Transaction Hash: ${
                        tx.transactionHash
                      }`}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

HomePage.Layout = AppBarLayout;

export default HomePage;
