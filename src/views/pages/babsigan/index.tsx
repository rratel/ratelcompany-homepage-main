import { Helmet } from 'react-helmet-async';
import BabsiganSection from '@views/sections/babsigan-rest';

export default function BabsiganPage() {
  return (
    <>
      <Helmet>
        <title> 밥시간: 동대문 야간시장용 배달앱</title>
      </Helmet>
      <BabsiganSection />
    </>
  );
}
