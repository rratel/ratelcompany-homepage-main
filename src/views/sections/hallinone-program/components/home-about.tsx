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
import ReactPlayer from 'react-player';
import { files, paths } from '@src/routes/paths';

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
        textAlign: { xs: 'center', md: 'center' },
      }}
    >
      <Grid container alignItems="flex-start">
        {mdUp && (
          <Grid container xs={6} gap={3} alignItems="center" direction="column">
            <Grid xs={8}>
              <m.div variants={varFade().inUp}>
                <Image
                  src="/assets/images/hallinone/program/about/1.png"
                  ratio="6/4"
                  sx={{ borderRadius: 1, boxShadow: shadow, objectFit: 'fill' }}
                />
              </m.div>
            </Grid>

            <Grid xs={8}>
              <m.div variants={varFade().inUp}>
                <Image
                  src="/assets/images/hallinone/program/about/2.png"
                  ratio="6/4"
                  sx={{ borderRadius: 1, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          </Grid>
        )}

        <Grid xs={12} md={6} lg={5} alignContent="center" justifyContent="center">
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              홀인원 식당관리자란?
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                lineHeight: 1.6,
              }}
            >
              홀인원 식당관리자 프로그램은 스크린골프장에 설치된 <br />
              태블릿 PC를 통해 들어온 주문을 실시간으로 처리하고 <br />
              주문수락, 메뉴관리 기능을 제공합니다. <br />
              직관적이고 쉬운 UI와 영수증 프린터 연동을 통해 <br />
              번거로운 전화주문이 아닌 자동화된 시스템을 사용해보세요
            </Typography>
          </m.div>
          <m.div variants={varFade().inRight}>
            <Stack
              spacing={2}
              direction={{ xs: 'column-reverse', sm: 'row' }}
              sx={{ mb: 5, mt: 3, alignItems: 'center', justifyContent: 'center' }}
            >
              <Stack alignItems="center" spacing={2}>
                <MuiLink href={files.hallinoneRest} rel="noreferrer">
                  <Button
                    color="inherit"
                    size="large"
                    variant="contained"
                    startIcon={<Iconify icon="eva:flash-fill" width={24} />}
                  >
                    프로그램 설치
                  </Button>
                </MuiLink>
              </Stack>
              <MuiLink href={paths.hallinone} rel="noreferrer" target="_blank">
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                >
                  홀인원 서비스란?
                </Button>
              </MuiLink>
            </Stack>
          </m.div>
        </Grid>
      </Grid>

      <Box sx={{ px: { md: 12, xs: 3 }, mt: { md: 10 } }}>
        <Typography variant="h6" sx={{ color: 'text.disabled', mb: 2 }}>
          사용 가이드 영상
        </Typography>
        <ReactPlayer
          className="react-player fixed-bottom"
          url="video/guide.mp4"
          width="100%"
          height="100%"
          controls
        />
      </Box>
    </Container>
    // </Box>
  );
}
