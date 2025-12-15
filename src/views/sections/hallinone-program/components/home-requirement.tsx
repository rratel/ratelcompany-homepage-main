import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import Image from '@components/atoms/image';
import { MotionViewport, varFade } from '@components/atoms/animate';

export default function HomeRequirement() {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.neutral',
      }}
    >
      <Container
        component={MotionViewport}
        sx={{ textAlign: 'center', pt: { xs: 3, md: 9 }, pb: { xs: 3, md: 7 } }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h6" sx={{ color: 'text.disabled' }}>
            필수 설정
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ my: 1 }}>
            영수증 프린터 연동방법
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
            배달의민족, 쿠팡이츠 등의 배달 프로그램을 사용하신다면
            <br />
            아래 절차에 따라 영수증 프린터를 설정해주세요
          </Typography>
        </m.div>
        <Box
          sx={{
            mt: { xs: 4, md: 7 },
            mb: { xs: 4, md: 7 },
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src="/assets/images/hallinone/program/requirement/1.png" alt="image1" />
        </Box>
        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 640,
              color: 'text.secondary',
            }}
          >
            타사 배달대행 프로그램을 사용중이시라면 위와 같이
            <br />
            baudRate, Port 값을 확인해주세요
          </Typography>
        </m.div>
        <Box
          sx={{
            mt: { xs: 4, md: 7 },
            mb: { xs: 4, md: 7 },
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src="/assets/images/hallinone/program/requirement/2.png" alt="image2" />
        </Box>
        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 640,
              color: 'text.secondary',
            }}
          >
            {`식당관리 > 프린터 설정 > baudRate와 시리얼포트에`}
            <br />
            해당하는 값을 선택하고 변경사항 저장을 눌러주세요
          </Typography>
        </m.div>
      </Container>
    </Box>
  );
}
