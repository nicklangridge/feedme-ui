import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import Link from '@mui/material/Link';

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
  const [ showMore, setShowMore ] = useState(false);
  
  if (isPending) return null;
  if (error)     return null;
  if (!artist?.artist?.bio?.content) return null;
  
  const charLimit = 600; // Limit the bio to 500 characters
  let bioHTML = formatBioHTML(artist.artist.bio.content);
  const hasMore = bioHTML.length > charLimit;
  if (hasMore && !showMore) {
    bioHTML = bioHTML.slice(0, charLimit) + '...';
  }
  
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Artist Bio
        </Typography>
        <Typography className="lastfm-artist-bio" variant="body1" component="div" sx={{ mt: 1 }}>
          <div dangerouslySetInnerHTML={{ __html: bioHTML }} />
        </Typography>
        { hasMore && (
          <Link onClick={() => setShowMore(!showMore)} sx={{ mt: 2, cursor: 'pointer' }}>
            Show {showMore ? 'less' : 'more'}...
          </Link>
        )}
      </CardContent>
    </Card>
  );
};
