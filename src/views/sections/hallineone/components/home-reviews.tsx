import { m } from 'framer-motion';
// @mui
import Masonry from '@mui/lab/Masonry';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Stack, { StackProps } from '@mui/material/Stack';
// hooks
import { useResponsive } from '@hooks/use-responsive';
// theme
import { bgBlur, bgGradient, hideScroll } from '@themes/css';
// components
import Iconify from '@components/atoms/iconify';
import { MotionViewport, varFade } from '@components/atoms/animate';

// ----------------------------------------------------------------------

const _testimonials = [
  {
    name: '관악구 D스크린골프',
    postedDate: '2023년 6월 2일',
    ratingNumber: 5,
    content: `족발은 쓰레기가 너무 많이 나와서 꺼려했는데, 넣고 싶은 음식 카테고리만 넣을 수 있어서 좋아요~`,
  },
  {
    name: '성북구 W스크린골프',
    postedDate: '2023년 6월 22일',
    ratingNumber: 5,
    content: `배달비용 청구하면 손님이 줄어들까 걱정했는데 홀인원이 자동으로 챙겨주니 너무 편합니다`,
  },
  {
    name: '영등포구 D스크린골프',
    postedDate: '2023년 7월 4일',
    ratingNumber: 5,
    content: `홀인원 사용하고 부가 음료, 주류 매출이 엄청 올랐습니다. 감사합니다!`,
  },
  {
    name: '중구 H스크린골프',
    postedDate: '2023년 5월 30일',
    ratingNumber: 4,
    content: `방에 태블릿PC가 하나씩 있으니 손님분들이 최신 매장으로 좋게 봐요 :)`,
  },
  {
    name: '강서구 H스크린골프',
    postedDate: '2023년 7월 2일',
    ratingNumber: 5,
    content: `전부 무료로 사용하니 신경 쓸 것이 없네요`,
  },
  {
    name: '성동구 M스크린골프',
    postedDate: '2023년 6월 13일',
    ratingNumber: 4,
    content: `이제 배달음식을 기분 좋게 정리할 수 있어요 수수료가 쏠쏠하게 벌리니 기분이 좋네요~`,
  },
];

export default function HomeReviews() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const renderDescription = (
    <Box
      sx={{
        maxWidth: { md: 360 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography variant="overline" sx={{ color: 'common.white', opacity: 0.48 }}>
          고객의 소리
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3, color: 'common.white' }}>
          홀인원을 쓰신
          <br />
          고객들의 의견
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'common.white' }}>
          홀인원으로 간편하게 주문하시고
          <br />
          리뷰를 남겨보세요
        </Typography>
      </m.div>
    </Box>
  );

  const renderContent = (
    <Box
      sx={{
        py: { md: 10 },
        height: { md: 1 },
        ...(mdUp && {
          ...hideScroll.y,
        }),
      }}
    >
      <Masonry spacing={3} columns={{ xs: 1, md: 2 }} sx={{ ml: 0 }}>
        {_testimonials.map((testimonial) => (
          <m.div key={testimonial.name} variants={varFade().inUp}>
            <Review testimonial={testimonial} />
          </m.div>
        ))}
      </Masonry>
    </Box>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.9),
          imgUrl: '/assets/images/hallinone/table-order/reviews/background.jpg',
        }),
        overflow: 'hidden',
        height: { md: 840 },
        py: { xs: 10, md: 0 },
      }}
    >
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid xs={10} md={4}>
            {renderDescription}
          </Grid>

          <Grid
            xs={12}
            md={7}
            lg={6}
            alignItems="center"
            sx={{
              height: 1,
            }}
          >
            {renderContent}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ReviewProps = StackProps & {
  testimonial: {
    name: string;
    content: string;
    postedDate: string;
    ratingNumber: number;
  };
};

function Review({ testimonial, sx, ...other }: ReviewProps) {
  const theme = useTheme();

  const { name, ratingNumber, postedDate, content } = testimonial;

  return (
    <Stack
      spacing={3}
      sx={{
        ...bgBlur({
          color: theme.palette.common.white,
          opacity: 0.08,
        }),
        p: 3,
        borderRadius: 2,
        color: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Iconify icon="mingcute:quote-left-fill" width={40} sx={{ opacity: 0.48 }} />

      <Typography variant="body2">{content}</Typography>

      <Rating value={ratingNumber} readOnly size="small" />

      <Stack direction="row">
        {/* <Avatar alt={name} src={avatarUrl} sx={{ mr: 2 }} /> */}

        <ListItemText
          primary={name}
          secondary={postedDate}
          primaryTypographyProps={{
            typography: 'subtitle2',
            mb: 0.5,
          }}
          secondaryTypographyProps={{
            typography: 'caption',
            color: 'inherit',
            sx: { opacity: 0.64 },
          }}
        />
      </Stack>
    </Stack>
  );
}
