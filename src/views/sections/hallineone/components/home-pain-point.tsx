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
    icon: ' /assets/icons/products/hallinone/table-order/home/pain1.png',
    title: '거리 계산없는 배달로 플레이 지연',
    description: ['거리를 고려하지 않은 배달음식 주문', '플레이 지연으로 다음 고객의 불편함 호소'],
  },
  {
    icon: ' /assets/icons/products/hallinone/table-order/home/pain2.png',
    title: '카운터를 통한 배달음식 대리 주문',
    description: ['카운터를 통한 배달음식 대리 주문', '직원과의 마찰 발생, 노동력 낭비'],
  },
  {
    icon: ' /assets/icons/products/hallinone/table-order/home/pain3.png',
    title: '정리비용에 대한 고객과의 갈등',
    description: ['배달음식 정리비용 청구 시', '고객과의 마찰 발생, 이용 고객 감소'],
  },
  {
    icon: ' /assets/icons/products/hallinone/table-order/home/pain4.png',
    title: '직접조리의 불편함',
    description: ['직접 조리, 재고 관리 등 노동력 급증', '조리시설 공간 필요, 불쾌적한 환경'],
  },
];

// ----------------------------------------------------------------------

export default function HomeFainPoint() {
  return (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Stack spacing={3} sx={{ textAlign: 'center', mb: { xs: 5, md: 10 } }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">HALL IN ONE 미보유 매장</Typography>
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
                boxShadow: (theme) => ({
                  md: `-10px 10px 20px ${alpha(theme.palette.grey[700], 0.08)}`,
                }),
                bgcolor: 'background.default',
                p: (theme) => ({
                  lg: theme.spacing(10, 5),
                  xs: theme.spacing(5, 2),
                }),
              }}
            >
              <Box component="img" src={card.icon} sx={{ mx: 'auto', width: 48, height: 48 }} />

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
