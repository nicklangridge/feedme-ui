import Box from '@mui/material/Box';
import { constrainedGridWidth } from '@/theme';

export default function ContentBox({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ margin: '0 auto', ...constrainedGridWidth }}>
      { children }
    </Box>
  );
}