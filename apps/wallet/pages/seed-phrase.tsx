import { Typography, Button, Box, Card, CardContent } from "@mui/material";

import { NextPageWithLayout } from "../types/next";
import AppBarLayout from "../layouts/AppBarLayout";
import Link from "next/link";

const SeedPhrasePage: NextPageWithLayout = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4">비밀 복구 구문</Typography>
      <Box mt={1}>
        <Typography variant="subtitle1" sx={{ whiteSpace: "pre-line" }}>
          {`비밀 백업 구문을 이용하면 계정을 쉽게 백업하고 복구할 수 있습니다.
          경고: 비밀 복구 구문은 절대로 공개하지 마세요. 이 구문이 있는 사람은 귀하의 Ether를 영원히 소유할 수 있습니다.`}
        </Typography>
        <br />
        <Typography variant="subtitle1" sx={{ color: "orangered" }}>
          팁: 이 구문을 1Password 같은 비밀번호 관리자에 저장하세요. 메모지에 이
          구문을 적어 안전한 곳에 보관하세요. 보안을 더욱 강화하고 싶다면 여러
          메모지에 적은 다음 2~3곳에 보관하세요. 이 구문을 기억하세요.
        </Typography>
      </Box>
      <Card sx={{ marginTop: 3, marginBottom: 3 }}>
        <CardContent>
          media fortune holiday space casual insane snack chest stone enroll
          critic vivid
        </CardContent>
      </Card>
      <Link href="/" passHref>
        <Button variant="contained" size="large">
          다음
        </Button>
      </Link>
    </Box>
  );
};

SeedPhrasePage.Layout = AppBarLayout;

export default SeedPhrasePage;
