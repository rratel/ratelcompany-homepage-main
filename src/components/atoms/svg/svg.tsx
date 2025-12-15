import { forwardRef } from 'react';
// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

export interface SvgProps extends BoxProps {
  src: string;
}

const Svg = forwardRef<HTMLSpanElement, SvgProps>(({ src, sx, ...other }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx
    }}
    {...other}
  />
));

export default Svg;
