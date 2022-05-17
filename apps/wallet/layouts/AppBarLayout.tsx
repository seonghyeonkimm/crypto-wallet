import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import BaseLayout from "./BaseLayout";

type Props = React.PropsWithChildren<{ className?: string }>;

const AppBarLayout = ({ children, className }: Props) => {
  return (
    <BaseLayout className={className}>
      <AppBar position="static">
        <Toolbar>
          <Box mr={1} display="flex">
            <AccountBalanceWalletIcon fontSize="medium" />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Wallet
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </BaseLayout>
  );
};

export default AppBarLayout;
