import { Helmet } from 'react-helmet-async';
import BabsiganRestaurantSection from '@views/sections/babsigan-rest';

export default function BabsiganPage() {
  return (
    <>
      <Helmet>
        <title> 밥시간: 동대문 야간시장용 배달 플랫폼 식당관리자 프로그램</title>
      </Helmet>
      <BabsiganRestaurantSection />
    </>
  );
}
