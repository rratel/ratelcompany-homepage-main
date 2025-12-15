import { useScroll } from 'framer-motion';
import Box from '@mui/material/Box';
import ScrollProgress from '@components/molecules/scroll-progress';
import HomeHero from './components/home-hero';
import HomeCaution from './components/home-caution';
import HomeAbout from './components/home-about';
import HomeRequirement from './components/home-requirement';

export default function HallinoneProgramSection() {
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
        <HomeRequirement />
        <HomeCaution />
      </Box>
    </>
  );
}
