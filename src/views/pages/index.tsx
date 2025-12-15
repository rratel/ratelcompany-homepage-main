import { Helmet } from 'react-helmet-async';
import HomeSection from '@src/views/sections/home';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> 라텔컴퍼니: 스크린골프장을 위한 플랫폼</title>
      </Helmet>
      <HomeSection />
    </>
  );
}
