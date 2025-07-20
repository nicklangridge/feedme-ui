//import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Spinner from '@/components/ui/spinner';

import { useRelease } from '../api/get-release';

function Loading() {
  return (
    <Spinner />
  );
}

function NotFound() {
  return (
    <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginTop: 4 }}>
      Release not found
    </Typography>
  );
}

 
type Props = {
  releaseId: number;
};

export default function ReleaseDetail({ releaseId }: Props) {
  
  const { isPending, error, data } = useRelease({ releaseId });
  const release = data?.data;
  
  if (isPending) return Loading();
  
  if (error) { /* Handle */ }
  
  if (!release?.album_id) return NotFound();
  
  return (
    <>
     Release { release.album_name } by { release.artist_name }
    </>
  );
};
