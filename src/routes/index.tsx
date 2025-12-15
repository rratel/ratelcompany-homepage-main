import { lazy, Suspense } from 'react';
import { Navigate, useRoutes, Outlet } from 'react-router-dom';
import SplashScreen from '@components/atoms/loading-screen/splash-screen';
// ----------------------------------------------------------------------
import MainLayout from '@views/layouts/main';
import CompactLayout from '@views/layouts/compact';
import { paths } from './paths';
// ----------------------------------------------------------------------
const HomePage = lazy(() => import('@views/pages'));
const HallinonePage = lazy(() => import('@views/pages/hallinone'));
const HallinoneProgramPage = lazy(() => import('@views/pages/hallinone/program'));
const BabsiganRestaurantPage = lazy(() => import('@views/pages/babsigan/restaurant'));
const ConcedePage = lazy(() => import('@views/pages/concede'));
const ContactPage = lazy(() => import('@views/pages/contact'));

const Page500 = lazy(() => import('@views/pages/error/500'));
const Page403 = lazy(() => import('@views/pages/error/403'));
const Page404 = lazy(() => import('@views/pages/error/404'));
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      element: (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <Outlet />
          </Suspense>
        </MainLayout>
      ),
      children: [
        { path: '/', element: <HomePage /> },
        { path: paths.hallinone, element: <HallinonePage /> },
        { path: paths.hallinoneProgram, element: <HallinoneProgramPage /> },
        { path: paths.babsiganProgram, element: <BabsiganRestaurantPage /> },
        { path: paths.concede, element: <ConcedePage /> },
        { path: paths.contact, element: <ContactPage /> },
      ],
    },
    {
      element: (
        <CompactLayout>
          <Suspense fallback={<SplashScreen />}>
            <Outlet />
          </Suspense>
        </CompactLayout>
      ),
      children: [
        // { path: 'coming-soon', element: <ComingSoonPage /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '500', element: <Page500 /> },
      ],
    },

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
