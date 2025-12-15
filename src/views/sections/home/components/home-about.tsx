import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
// hooks
import { useResponsive } from '@hooks/use-responsive';
// utils
import { fPercent } from '@utils/format-number';
// components
import Image from '@components/atoms/image';
import Iconify from '@components/atoms/iconify';
import { MotionViewport, varFade } from '@components/atoms/animate';
import { paths } from '@src/routes/paths';

// ----------------------------------------------------------------------

export default function HomeAbout() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  return (
    <Container
      id="about-section"
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
        {mdUp && (
          <Grid container xs={12} md={6} lg={7} alignItems="center" sx={{ pr: { md: 7 } }}>
            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="our office 2"
                  src="/assets/images/home/service1.png"
                  ratio="1/1"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>

            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="our office 1"
                  src="/assets/images/home/service2.png"
                  ratio="3/4"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          </Grid>
        )}

        <Grid xs={12} md={6} lg={5}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              스크린 골프장을 위한 서비스
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
              variant="body2"
            >
              라텔컴퍼니는 스크린골프 가맹점을 이용하는 고객과,
              <br />
              가맹점의 니즈 및 불편사항을 개선하기 위해
              <br />
              스크린골프장에 태블릿 PC를 설치하여
              <br />
              음식점을 입점하는 독점 배달 플랫폼입니다.
              <br />
              홀인원 서비스는 SK, LG 등의 기업과 파트너십을 체결하고
              <br />
              야놀자와 같은 글로벌 기업과 사업 확장을 추진하고 있습니다.
              <br />
              스크린골프 가맹점은 고객들의 불편사항 개선과 니즈를 반영하여
              <br />
              질 좋은 서비스를 제공하며, 음식점은 태블릿을 통한
              <br />
              고정 주문 및 광고효과로 새로운 거래처를 확보하여
              <br />
              매출 증대 효과를 가져올 것입니다.
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href={paths.hallinone}
              sx={{ mt: 3 }}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            >
              서비스소개
            </Button>
          </m.div>
        </Grid>
      </Grid>
    </Container>
    // </Box>
  );
}
