// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//
import ContactHero from './components/contact-hero';
import ContactFAQ from './components/contact-faq';
import ContactForm from './components/contact-form';

// ----------------------------------------------------------------------

export default function ContactSection() {
  return (
    <>
      <ContactHero />
      <Container sx={{ py: 10 }}>
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactFAQ />
          <ContactForm />
        </Box>
      </Container>
    </>
  );
}
