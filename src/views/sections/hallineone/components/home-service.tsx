import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from '@components/atoms/image';
import { MotionViewport, varFade } from '@components/atoms/animate';
import Carousel, { useCarousel } from '@components/molecules/carousel';

const services = [
  { id: 1, src: `/assets/images/hallinone/table-order/service/image1.jpeg` },
  { id: 2, src: `/assets/images/hallinone/table-order/service/image2.jpeg` },
  { id: 3, src: `/assets/images/hallinone/table-order/service/image3.jpeg` },
  { id: 4, src: `/assets/images/hallinone/table-order/service/image4.jpeg` },
  { id: 5, src: `/assets/images/hallinone/table-order/service/image5.jpeg` },
];

export default function HomeService() {
  const carousel = useCarousel({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Service
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          홀인원 서비스를 사용하는 고객들
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
          수많은 매장들이 선택한 홀인원, 간편하게 도입해보세요
        </Typography>
      </m.div>

      <Box sx={{ position: 'relative' }}>
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {services.map((image) => (
            <Box
              key={image.id}
              component={m.div}
              variants={varFade().in}
              sx={{
                px: 1.5,
                py: { xs: 8, md: 10 },
              }}
            >
              <ServiceCard src={image.src} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceCardProps = {
  src: string;
};

function ServiceCard({ src }: ServiceCardProps) {
  return (
    <Box sx={{ px: 1 }}>
      <Image alt="홀인원 서비스" src={src} ratio="4/6" sx={{ borderRadius: 2 }} />
    </Box>
  );
}
