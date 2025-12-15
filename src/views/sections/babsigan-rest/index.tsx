import { useScroll } from 'framer-motion';
import Box from '@mui/material/Box';
import ScrollProgress from '@components/molecules/scroll-progress';
// components
import HomeHero from './components/home-hero';
import HomeCaution from './components/home-caution';
import HomeRequirement from './components/home-requirement';

export default function BabsiganProgramSection() {
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
        <HomeRequirement />
        <HomeCaution />
      </Box>
    </>
  );
}
