import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
// hooks
import { useResponsive } from '@hooks/use-responsive';
// components
import Image from '@components/atoms/image';
import Iconify from '@components/atoms/iconify';
import { MotionViewport, varFade } from '@components/atoms/animate';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-scroll';

// ----------------------------------------------------------------------

export const SKILLS = [...Array(3)].map((_, index) => ({
  label: ['Development', 'Design', 'Marketing'][index],
  value: [20, 40, 60][index],
}));

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
      id="service"
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Grid container alignItems="flex-start">
        {mdUp && (
          <Grid container xs={6} gap={3} alignItems="center" direction="column">
            <Grid xs={8}>
              <m.div variants={varFade().inUp}>
                <Image
                  src="/assets/images/hallinone/table-order/about/image1.png"
                  ratio="4/3"
                  sx={{ borderRadius: 1, boxShadow: shadow, objectFit: 'fill' }}
                />
              </m.div>
            </Grid>

            <Grid xs={8}>
              <m.div variants={varFade().inUp}>
                <Image
                  src="/assets/images/hallinone/table-order/about/image2.png"
                  ratio="4/3"
                  sx={{ borderRadius: 1, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          </Grid>
        )}

        <Grid xs={12} md={6} lg={5} alignContent="center" justifyContent="center">
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              홀인원 서비스란?
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                lineHeight: 1.6,
              }}
            >
              홀인원은 스크린 골프장의 각 방에 태블릿 PC를 설치하여 <br />
              배달음식을 편리하게 주문할 수 있는 배달 플랫폼입니다.
              <br />
              자동화 시스템을 통하여 음식이 배달되고 <br />
              주문 건 별 수익이 골프장으로 창출되어 정리비용과 <br />
              고정 비용 절감에 대한 고충이 사라집니다.
              <br /> <br />
              또한 매장관리 비용을 절감하기 위한 무인매장 플랫폼 <br />
              컨시드를 서비스 준비중입니다.
            </Typography>
          </m.div>
          <m.div variants={varFade().inRight}>
            <Stack
              spacing={1.5}
              direction={{ xs: 'column-reverse', sm: 'row' }}
              sx={{ mb: 5, mt: 3, alignItems: 'center' }}
            >
              <Stack alignItems="center" spacing={2}>
                <MuiLink href="/files/catalog.pdf" rel="noreferrer" target="_blank">
                  <Button
                    color="inherit"
                    size="large"
                    variant="contained"
                    startIcon={<Iconify icon="eva:flash-fill" width={24} />}
                  >
                    서비스 소개
                  </Button>
                </MuiLink>
              </Stack>
              <Link to="contact" smooth>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                >
                  서비스 도입 문의
                </Button>
              </Link>
            </Stack>
          </m.div>
        </Grid>
      </Grid>
    </Container>
    // </Box>
  );
}
