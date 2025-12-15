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

export default function ConcedeAbout() {
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
            <Grid xs={9}>
              <m.div variants={varFade().inUp}>
                <Image
                  src="/assets/images/concede/about.png"
                  sx={{ width: '100%', objectFit: 'fill' }}
                />
              </m.div>
            </Grid>
          </Grid>
        )}

        <Grid xs={12} md={6} lg={5} alignContent="center" justifyContent="center">
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              컨시드 서비스란?
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                lineHeight: 1.6,
              }}
            >
              컨시드는 키오스크 및 Smart IoT 장비를 통해 <br />
              24시간 무인매장을 운영할 수 있는 플랫폼입니다.
              <br />
              자동화 시스템을 통하여 체계적으로 매장을 관리하고
              <br />
              자동결제 시스템부터 매장 보안시설까지
              <br />
              무인매장 운영을 위한 필수적인 설비를
              <br />
              도입비 없이 저렴하게 제공하고 있습니다.
              <br />
              <br />
              컨시드 무인매장을 도입하고 저녁있는 삶과
              <br />
              야간에도 발생하는 추가적인 매출로
              <br />
              무인매장 운영에 대한 걱정을 해결하세요
            </Typography>
          </m.div>
          <m.div variants={varFade().inRight}>
            <Stack
              spacing={1.5}
              direction={{ xs: 'column-reverse', sm: 'row' }}
              sx={{ mb: 5, mt: 3, alignItems: 'center' }}
            >
              <Stack alignItems="center" spacing={2}>
                <MuiLink href="/files/concede_magazine.pdf" rel="noreferrer" target="_blank">
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
