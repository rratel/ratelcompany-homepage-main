import { m, useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import MuiLink from '@mui/material/Link';
// hooks
import { useResponsive } from '@hooks/use-responsive';
// theme
import { bgGradient, bgBlur } from '@themes/css';
// layouts
import { HEADER } from '@views/layouts/config-layout';
// components
import Iconify from '@components/atoms/iconify';
import { MotionContainer, varFade } from '@components/atoms/animate';
import { files } from '@src/routes/paths';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_3.jpg',
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.lighter, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.light, 0.12),
}));

type StyledPolygonProps = {
  opacity?: number;
  anchor?: 'left' | 'right';
};

const StyledPolygon = styled('div')<StyledPolygonProps>(
  ({ opacity = 1, anchor = 'left', theme }) => ({
    ...bgBlur({
      opacity,
      color: theme.palette.background.default,
    }),
    zIndex: 9,
    bottom: 0,
    height: 80,
    width: '50%',
    position: 'absolute',
    clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
    ...(anchor === 'left' && {
      left: 0,
    }),
    ...(anchor === 'right' && {
      right: 0,
      transform: 'scaleX(-1)',
    }),
  })
);

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');

  const theme = useTheme();

  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const isLight = theme.palette.mode === 'light';

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const transition = {
    repeatType: 'loop',
    ease: 'linear',
    duration: 30 * 4,
    repeat: Infinity,
  } as const;

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderDescription = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 1,
        mx: 'auto',
        maxWidth: 480,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        },
      }}
    >
      <m.div variants={varFade().in}>
        <Stack spacing={1.5} sx={{ mb: 1, mt: 1, alignItems: 'center' }}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              밥시간 식당관리자란?
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                textAlign: 'center',
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                lineHeight: 1.6,
              }}
            >
              밥시간 식당관리자 프로그램은 밥시간 앱에 <br />
              등록된 식당의 주문을 실시간으로 처리하고 <br />
              주문수락, 메뉴관리 기능을 제공합니다. <br />
              직관적이고 쉬운 UI와 영수증 프린터 연동을 통해 <br />
              번거로운 전화주문이 아닌 자동화된 시스템을 사용해보세요
            </Typography>
          </m.div>
          <m.div variants={varFade().inRight}>
            <Stack spacing={1.5} sx={{ mb: 2, mt: 2, alignItems: 'center' }} direction="row">
              <Stack alignItems="center" spacing={2}>
                <MuiLink href={files.babsiganRest} rel="noreferrer">
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
            </Stack>
          </m.div>
        </Stack>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          밥시간 관리자를 다운로드하면
          <br />
          <MuiLink href="https://www.notion.so/49b0a7364ac943e38c2ae6711c6ef0bf">
            개인정보 및 서비스 약관
          </MuiLink>
          에 동의하는것으로 간주됩니다.
        </Typography>
      </m.div>
    </Stack>
  );

  const renderSlides = (
    <Stack
      direction="row"
      alignItems="flex-start"
      sx={{
        height: '150%',
        position: 'absolute',
        opacity: opacity > 0 ? opacity : 0,
        transform: `skew(${-16 - percent / 24}deg, ${4 - percent / 16}deg)`,
      }}
    >
      <Stack
        component={m.div}
        variants={varFade().in}
        sx={{
          width: 533,
          position: 'relative',
        }}
      >
        <Box
          component={m.img}
          animate={{ y: ['0%', '100%'] }}
          transition={transition}
          alt={isLight ? 'light_1' : 'dark_1'}
          src="/assets/images/babsigan/hero/hero.png"
          sx={{ position: 'absolute', mt: -5 }}
        />
        <Box
          component={m.img}
          animate={{ y: ['-100%', '0%'] }}
          transition={transition}
          alt={isLight ? 'light_1' : 'dark_1'}
          src="/assets/images/babsigan/hero/hero.png"
          sx={{ position: 'absolute' }}
        />
      </Stack>
    </Stack>
  );

  const renderPolygons = (
    <>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  );

  const renderEllipses = (
    <>
      {mdUp && <StyledEllipseTop />}
      <StyledEllipseBottom />
    </>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container component={MotionContainer} sx={{ height: 1 }}>
            <Grid container columnSpacing={{ md: 10 }} sx={{ height: 1 }}>
              <Grid xs={12} md={7}>
                {renderDescription}
              </Grid>

              {mdUp && <Grid md={5}>{renderSlides}</Grid>}
            </Grid>
          </Container>

          {renderEllipses}
        </StyledWrapper>
      </StyledRoot>

      {mdUp && renderPolygons}

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
