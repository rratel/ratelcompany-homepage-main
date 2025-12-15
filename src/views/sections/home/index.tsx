import Box from '@mui/material/Box';
import { useScroll } from 'framer-motion';
import ScrollProgress from '@components/molecules/scroll-progress';
import HomeHero from './components/home-hero';
import HomeAbout from './components/home-about';
import HomeStatistics from './components/home-statistcs';
import HomeService from './components/home-service';
import HomeContact from './components/home-contact';

export default function HomeSection() {
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
        <HomeAbout />
        <HomeStatistics />
        <HomeService />
        <HomeContact />
      </Box>
    </>
  );
}
