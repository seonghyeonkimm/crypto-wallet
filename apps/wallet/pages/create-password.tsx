import { Typography, Button, Box, TextField } from "@mui/material";

import { NextPageWithLayout } from "../types/next";
import AppBarLayout from "../layouts/AppBarLayout";
import Link from "next/link";

const CreatePasswordPage: NextPageWithLayout = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4">비밀번호 만들기</Typography>
      <Box my={3} display="flex" flexDirection="column">
        <TextField
          label="새 비밀번호"
          type="password"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="비밀번호 확인"
          type="password"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Link href="/seed-phrase" passHref>
        <Button variant="contained" size="large">
          생성
        </Button>
      </Link>
    </Box>
  );
};

CreatePasswordPage.Layout = AppBarLayout;

export default CreatePasswordPage;
