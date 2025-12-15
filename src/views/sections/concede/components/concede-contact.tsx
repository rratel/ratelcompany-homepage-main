// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//
import ContactFaq from './concede-contact-faq';
import ContactForm from './concede-contact-form';

// ----------------------------------------------------------------------

export default function ConcedeContact() {
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
