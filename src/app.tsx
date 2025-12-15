// scroll bar
import 'simplebar-react/dist/simplebar.min.css';
// lightbox
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// theme
import ThemeProvider from '@themes';
// hooks
import { useScrollToTop } from '@hooks/use-scroll-to-top';
// components
import ProgressBar from '@components/atoms/progress-bar';
import MotionLazy from '@components/atoms/animate/motion-lazy';
import { SnackbarProvider } from '@components/atoms/snackbar';
// routes
import Router from '@routes';

export default function App() {
  useScrollToTop();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider>
        <MotionLazy>
          <SnackbarProvider>
            <ProgressBar />
            <Router />
          </SnackbarProvider>
        </MotionLazy>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
