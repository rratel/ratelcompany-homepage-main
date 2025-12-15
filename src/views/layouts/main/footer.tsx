// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// routes
import { paths } from '@routes/paths';
import { RouterLink } from '@routes/components';
// components
import Logo from '@components/atoms/logo';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Ratel Company',
    children: [
      { name: '회사소개', href: paths.home },
      { name: '서비스', href: paths.concede },
    ],
  },
  {
    headline: 'Legal',
    children: [
      {
        name: '서비스이용정책',
        href: 'https://www.notion.so/rratel/49b0a7364ac943e38c2ae6711c6ef0bf',
      },
      {
        name: '개인정보처리방침',
        href: 'https://rratel.notion.site/67378946c32e4a66a140cbe0011df310',
      },
    ],
  },
  {
    headline: 'Contact',
    children: [{ name: 'contact@rratel.com', href: '#' }],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 5,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Logo mb={2} sx={{ fill: 'white' }} />

        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid xs={8} md={4}>
            <Stack
              direction="column"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mb: { xs: 5, md: 0 },
              }}
            >
              <Typography variant="body2" color="text.secondary">
                법인명 (상호) : 주식회사 라텔컴퍼니
              </Typography>
              <Typography variant="body2" color="text.secondary">
                대표이사 : 박주빈
              </Typography>
              <Typography variant="body2" color="text.secondary">
                사업자등록번호 : 422-81-02513
              </Typography>
              <Typography variant="body2" color="text.secondary">
                통신판매신고번호 : 2024-서울영등포-2717
              </Typography>
              <Typography variant="body2" color="text.secondary">
                주소 : 서울특별시 영등포구 양평로 21길 26
                <br />
                아이에스비즈타워 1차 1204호
              </Typography>
              <Typography variant="body2" color="text.secondary">
                전화문의 : 070-8672-7899 | 팩스 : 070-8277-7899
              </Typography>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 5 }} color="text.secondary">
          © 2021. (주)라텔컴퍼니 All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
