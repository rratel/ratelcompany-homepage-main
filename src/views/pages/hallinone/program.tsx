import { Helmet } from 'react-helmet-async';
import HallinoneProgramSection from '@views/sections/hallinone-program';

export default function HallinoneProgramPage() {
  return (
    <>
      <Helmet>
        <title> 홀인원: 매장관리자 프로그램</title>
      </Helmet>
      <HallinoneProgramSection />
    </>
  );
}
