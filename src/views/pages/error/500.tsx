import { Helmet } from 'react-helmet-async';
import { View500 } from '@views/sections/error';

export default function Page500() {
  return (
    <>
      <Helmet>
        <title> 500 Server Error</title>
      </Helmet>
      <View500 />
    </>
  );
}
