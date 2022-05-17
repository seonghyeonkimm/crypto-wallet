import { Typography, Button, Box } from "@mui/material";

import { NextPageWithLayout } from "../types/next";
import AppBarLayout from "../layouts/AppBarLayout";
import BasicCard from "../components/BasicCard";

const SelectActionPage: NextPageWithLayout = () => {
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
            <Button type="button" variant="contained">
              지갑 가져오기
            </Button>
          }
        />
        <BasicCard
          title="설정을 시작하죠!"
          description="이렇게 하면 새 지갑과 비밀 복구 구문이 만들어집니다"
          action={
            <Button type="button" variant="contained">
              지갑 생성
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

SelectActionPage.Layout = AppBarLayout;

export default SelectActionPage;
