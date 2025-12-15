import { useScroll } from 'framer-motion';
import Box from '@mui/material/Box';
import ScrollProgress from '@components/molecules/scroll-progress';
import { useResponsive } from '@hooks/use-responsive';
import HomeHero from './components/home-hero';
import HomePainPoint from './components/home-pain-point';
import HomeStrongPoint from './components/home-strong-point';
import HomeReviews from './components/home-reviews';
import HomeContact from './components/home-contact';
import HomeService from './components/home-service';
import HomeAbout from './components/home-about';
import HomePartners from './components/home-partners';

export default function HallinoneSection() {
  const mdUp = useResponsive('up', 'md');
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomePainPoint />

        <HomeAbout />

        <HomeStrongPoint />

        <HomePartners />

        {mdUp && <HomeService />}

        <HomeReviews />

        <HomeContact />
      </Box>
    </>
  );
}
