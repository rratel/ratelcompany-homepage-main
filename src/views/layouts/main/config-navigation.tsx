// routes
import { paths } from '@routes/paths';
// components
import Iconify from '@components/atoms/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: '회사소개',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: '제품소개',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: '/products',
    children: [
      {
        subheader: '홀인원',
        items: [
          { title: '테이블오더', path: paths.hallinone },
          { title: '매장관리자', path: paths.hallinoneProgram },
        ],
      },
      {
        subheader: '밥시간',
        items: [
          // { title: '밥시간 배달앱', path: paths.babsigan },
          { title: '식당관리자', path: paths.babsiganProgram },
        ],
      },
      {
        subheader: '컨시드',
        items: [{ title: '무인매장', path: paths.concede }],
      },
    ],
  },
  {
    title: '고객센터',
    icon: <Iconify icon="solar:phone-bold-duotone" />,
    path: '/contact',
  },
];
