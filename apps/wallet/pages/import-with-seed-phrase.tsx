import { Typography, Button, Box, TextField } from "@mui/material";

import { NextPageWithLayout } from "../types/next";
import AppBarLayout from "../layouts/AppBarLayout";
import Link from "next/link";

const CreatePasswordPage: NextPageWithLayout = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4">비밀 복구 구문으로 계정 가져오기</Typography>
      <Box mt={1}>
        <Typography variant="body2">
          금고를 복구하려면 비밀 구문을 여기에 입력하세요.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle2">비밀 복구 구문</Typography>
        <Box
          gap={2}
          display="flex"
          flexWrap="wrap"
          sx={{ "& *": { flex: "1 1 33%" } }}
        >
          {Array.from({ length: 12 }).map((_, index) => {
            return (
              <TextField
                key={index.toString()}
                label={`${index + 1}.`}
                type="password"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            );
          })}
        </Box>
      </Box>
      <Box my={3}>
        <Box>
          <Typography variant="subtitle2">비밀번호</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
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
      </Box>
      <Link href="/" passHref>
        <Button variant="contained" size="large">
          생성
        </Button>
      </Link>
    </Box>
  );
};

CreatePasswordPage.Layout = AppBarLayout;

export default CreatePasswordPage;
