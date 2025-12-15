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

export default function HomeContact() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        bgcolor: 'background.neutral',
      }}
    >
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 5, md: 8 } }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            contact
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h3" sx={{ my: 3 }}>
            아직도 도입을 고민중이신가요?
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            variant="h6"
            sx={{
              mx: 'auto',
              maxWidth: 640,
              color: 'text.secondary',
            }}
          >
            고객문의를 통해 서비스 도입에 대한
            <br />
            상담을 받아보실 수 있습니다
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, py: 1, px: 2 }}
            href={paths.contact}
            endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          >
            <Typography variant="h6">지금 문의하기</Typography>
          </Button>
        </m.div>
      </Container>
    </Box>
  );
}
