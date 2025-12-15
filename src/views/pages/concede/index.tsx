import { Helmet } from 'react-helmet-async';
import ConcedeSection from '@views/sections/concede';

export default function HallinonePage() {
  return (
    <>
      <Helmet>
        <title>컨시드 : 스크린골프장 무인매장 플랫폼</title>
      </Helmet>
      <ConcedeSection />
    </>
  );
}
