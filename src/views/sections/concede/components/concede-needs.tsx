import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from '@components/atoms/animate';
import Iconify from '@src/components/atoms/iconify';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: 'material-symbols:more-time',
    title: '24시간 운영',
    description: ['야간에도 운영되는 무인매장을 통해', '추가적인 매출채널을 확보하세요'],
  },
  {
    icon: 'fluent-emoji-high-contrast:free-button',
    title: '저렴한 도입',
    description: ['운영에 필요한 초기 설비들을', '초기 도입비용 없이 제공받으세요'],
  },
  {
    icon: 'mdi:weather-night',
    title: '저녁있는 삶',
    description: ['늦은 시간 방문한 고객 응대', '이제는 무인매장에게 맡기세요'],
  },
  {
    icon: 'hugeicons:ai-security-01',
    title: '안전한 매장',
    description: [
      '실내흡연, 도난 및 파손, 미성년자 출입 등',
      '매장의 고민을 해결해주는 보안 시스템',
    ],
  },
];

// ----------------------------------------------------------------------

export default function ConcedeNeeds() {
  return (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Stack spacing={3} sx={{ textAlign: 'center', mb: { xs: 5, md: 10 } }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">CONCEDE 무인매장의 장점</Typography>
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
              <Iconify icon={card.icon} width={96} />

              <Typography variant="h3" sx={{ mt: 4, mb: 1 }}>
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
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
