import { m } from 'framer-motion';
// @mui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// routes
import { RouterLink } from '@routes/components';
// components
import { MotionContainer, varBounce } from '@components/atoms/animate';
// assets
import { PageNotFoundIllustration } from '@assets/illustrations';

// ----------------------------------------------------------------------

export default function NotFoundView() {
  return (
    <MotionContainer>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" paragraph>
          페이지를 찾을 수 없습니다.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          죄송합니다. 페이지를 찾을 수 없습니다.
          <br />
          URL 주소를 잘못입력했는지 확인해주세요.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <PageNotFoundIllustration
          sx={{
            height: 260,
            my: { xs: 5, sm: 10 },
          }}
        />
      </m.div>

      <Button component={RouterLink} href="/" size="large" variant="contained">
        Go to Home
      </Button>
    </MotionContainer>
  );
}
