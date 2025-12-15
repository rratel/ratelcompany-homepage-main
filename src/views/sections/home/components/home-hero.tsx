import { m, MotionProps } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import Iconify from '@components/atoms/iconify';
import { MotionContainer, varFade } from '@components/atoms/animate';
// layouts
import { HEADER } from '@views/layouts/config-layout';
import { Link } from 'react-scroll';
import { useResponsive } from '@src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');
  return (
    <Box
      sx={{
        height: '100vh',
        pt: { md: `${HEADER.H_DESKTOP}px`, xs: `${HEADER.H_MOBILE}px` },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/assets/background/overlay_1.svg), url(/assets/images/home/hero.jpg)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 120 },
            position: { md: 'absolute' },
            textAlign: {
              xs: 'center',
              md: 'unset',
            },
          }}
        >
          <TextAnimate text="RATEL" variants={varFade().inDown} sx={{ color: 'primary.main' }} />

          <br />

          <TextAnimate text="COMPANY" variants={varFade().inDown} sx={{ color: 'common.white' }} />

          <m.div variants={varFade().inRight}>
            <Typography
              variant={mdUp ? 'h3' : 'h5'}
              sx={{
                mt: 3,
                ml: 1,
                color: 'common.white',
                fontWeight: 'fontWeightSemiBold',
              }}
            >
              If you want to go FAST, go ALONE
              <br />
              If you want to go FAR, go TOGETHER
            </Typography>
          </m.div>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            cursor: 'pointer',
            animation: 'bounce 2s infinite',
            opacity: 0.8,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <m.div
            className="arrow"
            animate={{ y: [0, -10, 0], opacity: [1, 0.1, 0.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Link to="about-section" smooth duration={500}>
              <Iconify icon="iconamoon:arrow-down-2-bold" width={48} color="white" />
            </Link>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TextAnimateProps = BoxProps &
  MotionProps & {
    text: string;
  };

function TextAnimate({ text, variants, sx, ...other }: TextAnimateProps) {
  return (
    <Box
      component={m.div}
      sx={{
        // typography: 'h1',
        fontWeight: 800,
        fontSize: { md: '6rem', xs: '3rem' },
        lineHeight: 1,
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
