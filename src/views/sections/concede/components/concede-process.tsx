import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import Image from '@components/atoms/image';
import { MotionViewport, varFade } from '@components/atoms/animate';
import Iconify from '@src/components/atoms/iconify';
import Card from '@mui/material/Card';
import { CardActionArea, CardContent, CardMedia } from '@mui/material';

const CARDS = [
  {
    image: '/assets/images/concede/step_1.png',
    title: '문의 / 상담',
    label: 'STEP. 1',
    description: ['전화 또는 QR코드 인식을 통해', '간편하게 상담을 접수합니다'],
  },
  {
    image: '/assets/images/concede/step_2.jpeg',
    title: '계약 진행',
    label: 'STEP. 2',
    description: ['상담이 접수되면 희망일자에 맞추어', '매장점검 및 방문계약이 진행됩니다'],
  },
  {
    image: '/assets/images/concede/step_3.jpeg',
    title: '무인 시스템 설치',
    label: 'STEP. 3',
    description: ['키오스크, 태블릿, 출입문 등의 무인설비를', '희망일자에 맞춰 설치를 진행합니다'],
  },
  {
    image: '/assets/images/concede/step_4.jpeg',
    title: '마케팅 및 지속관리',
    label: 'STEP. 4',
    description: [
      '현수막 제작 지원, 검색광고 등의 마케팅과',
      '지속적인 관리 및 가이드를 제공해드립니다',
    ],
  },
];

export default function ConcedeProcess() {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.neutral',
      }}
    >
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 3, md: 15 } }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Process
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ my: 1 }}>
            상담부터 설치, 운영까지 체계적인 관리
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 640,
              color: 'text.secondary',
            }}
            variant="h6"
          >
            2주만에 완료되는 무인매장 운영
            <br />
            무인매장 설치부터 운영 가이드까지 제공받으세요
          </Typography>
        </m.div>

        <Box
          gap={{ xs: 3, lg: 5 }}
          mt={4}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={`home-card-title-${index}`}>
              <Card
                sx={{
                  textAlign: 'center',
                  boxShadow: (theme) => ({
                    md: `-10px 10px 20px ${alpha(theme.palette.grey[700], 0.08)}`,
                  }),
                  bgcolor: 'background.default',
                }}
              >
                <CardActionArea>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia component="img" height="340" image={card.image} />

                    <Typography
                      variant="h2"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 28,
                        color: (theme) => alpha(theme.palette.grey[500], 0.9),
                        fontWeight: 'bold',
                      }}
                    >
                      {card.label}
                    </Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="h3" sx={{ mb: 1 }}>
                      {card.title}
                    </Typography>
                    {card.description.map((description, index2) => (
                      <Typography
                        variant="h6"
                        key={`home-card-description-${index2}`}
                        sx={{ color: 'text.secondary' }}
                      >
                        {description}
                      </Typography>
                    ))}
                  </CardContent>
                </CardActionArea>
              </Card>
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
