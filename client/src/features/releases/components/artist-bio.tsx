import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DOMPurify from 'dompurify';

import { useArtistInfo } from '@/features/releases/api/get-artist-info';

// Sanitize the HTML content to prevent XSS attacks, add paragraph formatting,
// open "read more" links in a new tab, and make licence text italic.
// Yay, parsing HTML with regex!
function formatBioHTML(html: string): string {
  return DOMPurify.sanitize(html)
    .replace(/\n/g, '<p>$&</p>')
    .replace(
      /(<a href="https:\/\/www.last.fm(?:.+?)")(>Read more on Last.fm<\/a>\.*)(.+)$/,
      '<p>$1 target="_blank" $2</p><p style="font-style:italic">$3</p>'
    );
}

export default function ArtistBio({artistName}: { artistName: string }) {

  const { isPending, error, data } = useArtistInfo({ artistName });
  const artist = data?.data;
  
  if (isPending) return null;
  if (error)     return null;
  if (!artist?.artist?.bio?.content) return null;
  
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Artist Bio
        </Typography>
        <Typography variant="body1" component="div" sx={{ mt: 2 }}>
          <div className="lastfm-artist-bio" dangerouslySetInnerHTML={{ __html: formatBioHTML(artist.artist.bio.content) }} />
        </Typography>
      </CardContent>
    </Card>
  );
};
