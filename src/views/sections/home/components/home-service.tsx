import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import Iconify from '@components/atoms/iconify';
import { MotionViewport, varFade } from '@components/atoms/animate';
import { paths } from '@src/routes/paths';

export default function HomeService() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 5, md: 8 } }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Services
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h3" sx={{ my: 3 }}>
            스크린골프장을 시작하셨나요?
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            variant="h6"
            sx={{
              mx: 'auto',
              color: 'text.secondary',
            }}
          >
            라텔컴퍼니는 스크린골프장을 운영하기 위한
            <br />
            최적의 솔루션을 제공합니다
          </Typography>
        </m.div>

        <Box
          sx={{
            my: 6,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" sx={{ mt: 3 }} gutterBottom>
              테이블오더
            </Typography>
            <Typography variant="h6" color="text.secondary">
              합리적인 가격의 테이블오더로
              <br />
              매출은 늘고, 관리는 간편해집니다
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, py: 1, px: 2 }}
              href={paths.hallinone}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            >
              <Typography variant="h6">서비스 소개</Typography>
            </Button>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" sx={{ mt: 3 }} gutterBottom>
              무인매장
            </Typography>
            <Typography variant="h6" color="text.secondary">
              키오스크와 매장관리 솔루션으로
              <br />
              야간에도 매출이 발생합니다
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, py: 1, px: 2 }}
              href={paths.concede}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            >
              <Typography variant="h6">서비스 소개</Typography>
            </Button>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" sx={{ mt: 3 }} gutterBottom>
              배달플랫폼
            </Typography>
            <Typography variant="h6" color="text.secondary">
              저렴한 배달비와 전화주문 없이
              <br />
              배달서비스를 이용해보세요
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, py: 1, px: 2 }}
              href={paths.babsiganProgram}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            >
              <Typography variant="h6">서비스 소개</Typography>
            </Button>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
