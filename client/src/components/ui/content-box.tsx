import Box from '@mui/material/Box';

// TODO: redundant, remove?

export default function ContentBox({ children }: { children: React.ReactNode }) {
  return (
    <Box maxWidth={'xl'} sx={{ width: '100%', margin: '0 auto'}}>
      { children }
    </Box>
  );
}