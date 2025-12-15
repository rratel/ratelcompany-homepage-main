import Typography from '@mui/material/Typography';
import Paper, { PaperProps } from '@mui/material/Paper';

// ----------------------------------------------------------------------

interface Props extends PaperProps {
  query?: string;
}

export default function SearchNotFound({ query, sx, ...other }: Props) {
  return query ? (
    <Paper
      sx={{
        bgcolor: 'unset',
        textAlign: 'center',
        ...sx
      }}
      {...other}
    >
      <Typography variant="h6" gutterBottom>
        페이지를 찾을 수 없습니다.
      </Typography>

      <Typography variant="body2">
        검색결과가 없습니다. &nbsp;
        <strong>&quot;{query}&quot;</strong>.
      </Typography>
    </Paper>
  ) : (
    <Typography variant="body2" sx={sx}>
      키워드를 입력해주세요.
    </Typography>
  );
}
