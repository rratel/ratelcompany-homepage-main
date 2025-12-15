import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import Image from '@components/atoms/image';
import { MotionViewport, varFade } from '@components/atoms/animate';

export default function HomePartners() {
  const renderImg = (
    <Image
      src="/assets/images/hallinone/table-order/partners/background.png"
      alt="partners-image"
      // overlay={alpha(theme.palette.grey[900], 0.18)}
    />
  );
  const renderLogo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 1,
        zIndex: 9,
        bottom: 0,
        opacity: 0.78,
        py: { xs: 2.5, md: 4.5 },
      }}
    >
      <Box
        component={m.img}
        key="sk"
        variants={varFade().in}
        alt="sk"
        src="/assets/images/hallinone/table-order/partners/ic_brand_sk.svg"
        sx={{
          m: { xs: 1.5, md: 2, mb: 10 },
          pb: { xs: 0.3, md: 1.1 },
          height: { xs: 25, md: 52 },
        }}
      />
      <Box
        component={m.img}
        key="lg"
        variants={varFade().in}
        alt="lg"
        src="/assets/images/hallinone/table-order/partners/ic_brand_lg.svg"
        sx={{
          m: { xs: 1.5, md: 2.5 },
          height: { xs: 25, md: 42 },
        }}
      />
    </Stack>
  );

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.neutral',
        // '&:before': {
        //   top: 0,
        //   left: 0,
        //   width: 1,
        //   content: "''",
        //   position: 'absolute',
        //   height: { xs: 220, md: 120 },
        //   bgcolor: 'background.default',
        // },
      }}
    >
      <Container component={MotionViewport} sx={{ textAlign: 'center', pt: { xs: 3, md: 15 } }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Partners
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ my: 1 }}>
            도입부터 설치까지 체계적인 관리
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 640,
              color: 'text.secondary',
            }}
          >
            SK 네트웍스와 LG 헬로비전과 사업제휴를 맺고,
            <br />
            홀인원 서비스를 정식으로 출시하였습니다
          </Typography>
        </m.div>
        <Box
          sx={{
            mt: { xs: 4, md: 8 },
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderImg}
        </Box>
        {renderLogo}
      </Container>
    </Box>
  );
}
