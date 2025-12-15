import { Helmet } from 'react-helmet-async';
import ContactSection from '@views/sections/contact';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>라텔컴퍼니 : 고객센터</title>
      </Helmet>
      <ContactSection />
    </>
  );
}
