import { m, MotionProps } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
// theme
import { bgGradient } from '@themes/css';
//
import { MotionContainer, varFade } from '@components/atoms/animate';
import { Divider } from '@mui/material';

// ----------------------------------------------------------------------

export default function ContactHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/images/contact/hero.jpg',
        }),
        height: { md: 380 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h4"
              sx={{
                mx: 'auto',
                color: 'text.primary',
              }}
            >
              라텔컴퍼니 고객센터에서
              <br />
              서비스 도입 상담을 받으실 수 있습니다
            </Typography>
          </m.div>

          <Stack
            spacing={{ xs: 1, md: 5 }}
            alignItems={{ xs: 'center', md: 'unset' }}
            direction={{ xs: 'column', md: 'row' }}
            sx={{ mt: 5, color: 'common.white' }}
          >
            <Stack sx={{ maxWidth: 260 }}>
              <m.div variants={varFade().inUp}>
                <Typography variant="body1">전화상담</Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h5">070-8672-7899</Typography>
              </m.div>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack sx={{ maxWidth: 260 }}>
              <m.div variants={varFade().inUp}>
                <Typography variant="body1">고객센터</Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h5">
                  서울특별시 영등포구
                  <br /> 양평로 21길 26
                </Typography>
              </m.div>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack sx={{ maxWidth: 260 }}>
              <m.div variants={varFade().inUp}>
                <Typography variant="body1">Fax</Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h5">070-8277-7899</Typography>
              </m.div>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
