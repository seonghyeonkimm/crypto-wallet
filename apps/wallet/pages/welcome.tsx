import { Typography, Button, Container, Box } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const WelcomePage = () => {
  return (
    <Container maxWidth="sm">
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
          <Button variant="contained">시작하기</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default WelcomePage;
