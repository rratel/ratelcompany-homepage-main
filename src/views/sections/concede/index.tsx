import Box from '@mui/material/Box';
import { useScroll } from 'framer-motion';
import ScrollProgress from '@components/molecules/scroll-progress';
import ConcedeHero from './components/concede-hero';
import ConcedeNeeds from './components/concede-needs';
import ConcedeAbout from './components/concede-about';
import ConcedeProcess from './components/concede-process';
import ConcedeContact from './components/concede-contact';

export default function HomeSection() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ConcedeHero />
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <ConcedeAbout />
        <ConcedeNeeds />
        <ConcedeProcess />
        <ConcedeContact />
      </Box>
    </>
  );
}
