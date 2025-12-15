import { Helmet } from 'react-helmet-async';
import { NotFoundView } from '@views/sections/error';

export default function Page404() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found</title>
      </Helmet>
      <NotFoundView />
    </>
  );
}
