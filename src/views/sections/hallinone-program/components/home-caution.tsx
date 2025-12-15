import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from '@components/atoms/image';
// components
import { MotionViewport, varFade } from '@components/atoms/animate';

// ----------------------------------------------------------------------

export default function HomeCaution() {
  return (
    <Container component={MotionViewport} sx={{ py: { xs: 5, md: 9 }, textAlign: 'center' }}>
      <Stack spacing={3} sx={{ textAlign: 'center', mb: { xs: 1, md: 2 } }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">혹시 사이드바가 보이지 않나요?</Typography>
        </m.div>
      </Stack>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 640,
            color: 'text.secondary',
          }}
        >
          POS기의 모니터가 작을 경우 사이드바가 화면을 가리기 때문에
          <br />
          아래 사진과 같이 메뉴 아이콘을 클릭시 사이드바가 나타납니다.
        </Typography>
      </m.div>
      <Box
        sx={{
          mt: { xs: 3, md: 4 },
          mb: { xs: 4, md: 7 },
          borderRadius: 2,
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src="/assets/images/hallinone/program/caution/1.png" alt="image1" />
      </Box>
    </Container>
  );
}
