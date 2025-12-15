import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from '@components/atoms/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/products/hallinone/table-order/home/strong1.png',
    title: '플레이지연 ZERO 우리동네 맛집 주문',
    description: ['반경 1km 이내 양질의 음식점만을 계약', '신속한 배달로 원활한 게임 일정 소화'],
  },
  {
    icon: ' /assets/icons/products/hallinone/table-order/home/strong2.png',
    title: '편의성을 갖춘 고객의 직접 주문',
    description: ['주소, 룸 정보가 탑제된 태블릿PC', '각 룸에서 편리한 원터치 직접 주문'],
  },
  {
    icon: ' /assets/icons/products/hallinone/table-order/home/strong3.png',
    title: '정리비용 고민 해결, 편리한 수익창출',
    description: ['자동화 시스템으로 주문 건별 수익 창출', '정리비용 고민 해결, 고정비용의 절감'],
  },
  {
    icon: ' /assets/icons/products/hallinone/table-order/home/strong4.png',
    title: '상담, 설치, 도입 전액 무료',
    description: ['조리 냄새 없는 쾌적한 환경', '공간, 재고 관리 및 노동력 불필요'],
  },
];

// ----------------------------------------------------------------------

export default function HomeStrongPoint() {
  return (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Stack spacing={3} sx={{ textAlign: 'center', mb: { xs: 5, md: 10 } }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">HALL IN ONE 보유 매장</Typography>
        </m.div>
      </Stack>

      <Box
        gap={{ xs: 3, lg: 5 }}
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
                bgcolor: 'background.default',
                p: (theme) => ({
                  lg: theme.spacing(10, 5),
                  xs: theme.spacing(5, 2),
                }),
                boxShadow: (theme) => ({
                  md: `-10px 10px 20px ${alpha(theme.palette.grey[700], 0.08)}`,
                }),
              }}
            >
              <Box
                component="img"
                src={card.icon}
                sx={{ mx: 'auto', width: index === 3 ? 80 : 48, height: 48 }}
              />

              <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
                {card.title}
              </Typography>

              {card.description.map((description, index2) => (
                <Typography
                  key={`home-card-description-${index2}`}
                  sx={{ color: 'text.secondary' }}
                >
                  {description}
                </Typography>
              ))}
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
