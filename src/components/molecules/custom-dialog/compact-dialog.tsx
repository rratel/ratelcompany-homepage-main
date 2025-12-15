// @mui
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
//
import { CompactDialogProps } from './types';

// ----------------------------------------------------------------------

export default function CompactDialog({
  title,
  content,
  open,
  onClose,
  ...other
}: CompactDialogProps) {
  return (
    <Dialog maxWidth="xs" open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>

      {content && <DialogContent sx={{ typography: 'body2' }}> {content} </DialogContent>}
    </Dialog>
  );
}
