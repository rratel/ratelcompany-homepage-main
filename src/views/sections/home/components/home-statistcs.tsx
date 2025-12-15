import { animate, easeOut, m, MotionProps, useMotionValue, useTransform } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from '@hooks/use-responsive';
// theme
import { bgGradient } from '@themes/css';
// components
import { MotionViewport, varFade } from '@components/atoms/animate';
import { Divider } from '@mui/material';

// ----------------------------------------------------------------------

export default function HomeStatistics() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.9),
          imgUrl: '/assets/images/home/statistics.jpg',
        }),
        overflow: 'hidden',
        height: { md: 280, xs: 500 },
        py: 10,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          position: 'relative',
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ my: 3 }}>
            Our Partners
          </Typography>
        </m.div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 1, md: 5 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <TextAnimate
              text="가맹골프장"
              variants={varFade().inDown}
              sx={{ color: 'common.white' }}
            />
            <RollingCounter targetNumber={74} duration={2} />
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <TextAnimate
              text="가맹음식점"
              variants={varFade().inDown}
              sx={{ color: 'common.white' }}
            />
            <RollingCounter targetNumber={312} duration={2} />
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <TextAnimate
              text="누적주문건"
              variants={varFade().inDown}
              sx={{ color: 'common.white' }}
            />
            <RollingCounter targetNumber={107600} duration={2} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

type TextAnimateProps = BoxProps &
  MotionProps & {
    text: string;
  };

function TextAnimate({ text, variants, sx, ...other }: TextAnimateProps) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h4',
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

// ----------------------------------------------------------------------
interface RollingCounterProps {
  targetNumber: number;
  duration: number;
}

const RollingCounter = ({ targetNumber, duration }: RollingCounterProps) => {
  const count = useMotionValue(0);
  const formattedNumber = useTransform(count, (latest) => Math.floor(latest).toLocaleString());
  return (
    <Box
      component={m.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => {
        animate(count, targetNumber, {
          duration,
          ease: easeOut,
        });
      }}
      sx={{ fontSize: '2rem', fontWeight: 'bold' }}
    >
      {/* @ts-ignore */}
      {formattedNumber}
    </Box>
  );
};
