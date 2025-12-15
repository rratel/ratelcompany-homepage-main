// @mui
import { DialogProps } from '@mui/material/Dialog';

// ----------------------------------------------------------------------

export type ConfirmDialogProps = Omit<DialogProps, 'title' | 'content'> & {
  title: React.ReactNode;
  content?: React.ReactNode;
  action: React.ReactNode;
  onClose: VoidFunction;
};

export type InfoDialogProps = Omit<DialogProps, 'title' | 'content'> & {
  title: React.ReactNode;
  content?: React.ReactNode;
  onClose: VoidFunction;
};

export type CompactDialogProps = Omit<DialogProps, 'title' | 'content'> & {
  title: React.ReactNode;
  content?: React.ReactNode;
  onClose: VoidFunction;
};
