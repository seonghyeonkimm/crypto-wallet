import { Typography, Button, Box } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { NextPageWithLayout } from "../types/next";
import BaseLayout from "../layouts/BaseLayout";
import Link from "next/link";

const WelcomePage: NextPageWithLayout = () => {
  return (
    <Box mt={8} textAlign="center">
      <AccountBalanceWalletIcon fontSize="large" color="primary" />
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          Wallet 방문을 환영합니다
        </Typography>
        <Typography variant="body1" gutterBottom>
          이더리움 및 분산형 웹에 연결합니다. 반갑습니다.
        </Typography>
      </Box>
      <Box mt={4}>
        <Link href="/select-action" passHref>
          <Button variant="contained">시작하기</Button>
        </Link>
      </Box>
    </Box>
  );
};

WelcomePage.Layout = BaseLayout;

export default WelcomePage;
