import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { constrainedGridWidth } from '@/theme';

const NotFoundRoute = () => {
  return (
    <>
      <Box sx={{ margin: '0 auto', ...constrainedGridWidth }}>
        <Typography variant="h1" component="div" sx={{ textAlign: 'center', marginTop: 4 }}>
          404 Not found
        </Typography>
      </Box>
    </>
  );
};

export default NotFoundRoute;
