// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//
import ContactFaq from './home-contact-faq';
import ContactForm from './home-contact-form';

// ----------------------------------------------------------------------

export default function HomeContact() {
  return (
    <Container sx={{ py: 10 }}>
      <Box
        gap={10}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        <ContactFaq />

        <ContactForm />
      </Box>
    </Container>
  );
}
