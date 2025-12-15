import { Helmet } from 'react-helmet-async';
import HallinoneSection from '@views/sections/hallineone';

export default function HallinonePage() {
  return (
    <>
      <Helmet>
        <title> 홀인원: 스크린골프장 배달플랫폼</title>
      </Helmet>
      <HallinoneSection />
    </>
  );
}
