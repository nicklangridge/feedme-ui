import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
        <CardContent>
          <Typography variant="h5" sx={{ textAlign: 'center' }}> 
            About
          </Typography> 
          <p>
            <strong>Feed Me Music</strong> brings together music reviews from the best sites on the web and links them with releases in <strong>Spotify</strong>.
          </p>
          <p>
            The aim is to provide a convenient way to get a daily fix of new music and discover new releases, artists, and genres.
          </p>
          <p>
            This is a non-commercial hobby project and is run on a best-effort basis. 
          </p>
      </CardContent>
    </Card>
  );
};

export default About;