import { useDropzone } from 'react-dropzone';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//
import Iconify from '@components/atoms/iconify';
//
import { UploadProps } from './types';

// ----------------------------------------------------------------------

export default function UploadButton({ error, disabled, label, sx, ...other }: UploadProps) {
  const { getRootProps, getInputProps, isDragReject, open } = useDropzone({
    disabled,
    ...other
  });

  const hasError = isDragReject || error;

  return (
    <Box {...getRootProps()}>
      <input {...getInputProps()} />
      <Button
        variant="contained"
        onClick={open}
        startIcon={<Iconify icon="eva:cloud-upload-fill" />}
      >
        {label ?? '업로드'}
      </Button>
    </Box>
  );
}
