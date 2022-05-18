import * as React from "react";
import {
  Typography,
  Button,
  Box,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

import { NextPageWithLayout } from "../types/next";
import AppBarLayout from "../layouts/AppBarLayout";
import { useWeb3 } from "../hooks/useWeb3";
import { useRouter } from "next/router";

const ImportWalletPage: NextPageWithLayout = () => {
  const web3 = useWeb3();
  const [privateKey, setPrivateKey] = React.useState("");
  const [error, setError] = React.useState(false);
  const router = useRouter();

  return (
    <Box mt={4}>
      <Typography variant="h4">지갑 가져오기</Typography>
      <Box my={3} display="flex" flexDirection="column">
        <TextField
          type="text"
          label="지갑 PrivateKey"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          try {
            const account = web3.signIn(privateKey);
            fetch("/api/wallet", {
              method: "POST",
              body: JSON.stringify(account),
            }).then((response) => {
              if (!response.ok) {
                return;
              }

              router.replace("/");
              return;
            });
          } catch (error) {
            setError(true);
          }
        }}
      >
        가져오기
      </Button>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        <Alert
          onClose={() => setError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          잘못된 PrivateKey입니다.
        </Alert>
      </Snackbar>
    </Box>
  );
};

ImportWalletPage.Layout = AppBarLayout;

export default ImportWalletPage;
