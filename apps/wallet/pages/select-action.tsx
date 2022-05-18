import * as React from "react";
import {
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
} from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

import { NextPageWithLayout } from "../types/next";
import AppBarLayout from "../layouts/AppBarLayout";
import BasicCard from "../components/BasicCard";
import Link from "next/link";
import { useWeb3 } from "../hooks/useWeb3";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SelectActionPage: NextPageWithLayout = () => {
  const router = useRouter();
  const web3 = useWeb3();
  const [privateKey, setPrivateKey] = React.useState<string>();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    router.prefetch("/");
  }, [router]);

  return (
    <Box mt={8} textAlign="center">
      <Box mt={3}>
        <Typography variant="h5" gutterBottom>
          Wallet이 처음이세요?
        </Typography>
      </Box>
      <Box display="flex" gap={2} mt={4} justifyContent="center">
        <BasicCard
          title="아니요. 이미 비밀 복구 구문이 있습니다."
          description="비밀 복구 구문을 사용하여 기존 지갑 가져오기"
          action={
            <Link href="/import-with-seed-phrase" passHref>
              <Button type="button" variant="contained">
                지갑 가져오기
              </Button>
            </Link>
          }
        />
        <BasicCard
          title="설정을 시작하죠!"
          description="이렇게 하면 새 지갑과 비밀 복구 구문이 만들어집니다"
          action={
            <Button
              type="button"
              variant="contained"
              onClick={() => {
                const account = web3.signUp();
                fetch("/api/wallet", {
                  method: "POST",
                  body: JSON.stringify(account),
                }).then((response) => {
                  if (!response.ok) {
                    return;
                  }

                  setPrivateKey(account.privateKey);
                  return;
                });
              }}
            >
              지갑 생성
            </Button>
          }
        />
      </Box>
      <Dialog open={Boolean(privateKey)}>
        <DialogTitle id="alert-dialog-title">PrivateKey 백업</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            PrivateKey를 안전한 곳에 백업하세요. PrivateKey를 잃어버리면 복구할
            수 없습니다. 지갑에 로그인할 때에 PrivateKey가 사용됩니다.
          </DialogContentText>
          <List sx={{ wordBreak: "break-all" }}>
            <ListItem disablePadding>
              <CopyToClipboard
                text={privateKey ?? ""}
                onCopy={() => setOpen(true)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SaveAltIcon />
                  </ListItemIcon>
                  <ListItemText primary={privateKey} />
                </ListItemButton>
              </CopyToClipboard>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              router.replace("/");
            }}
          >
            완료
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          PrivateKey를 복사했습니다.
        </Alert>
      </Snackbar>
    </Box>
  );
};

SelectActionPage.Layout = AppBarLayout;

export default SelectActionPage;
