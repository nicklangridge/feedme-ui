import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
        <CardContent>
          <Typography variant="h5"> 
            Feed Me Music
          </Typography> 
          <p>
            This website brings together album reviews from music sites all over the web and links them with albums in the Spotify catalogue.
          </p>
          <p>
            The aim is to provide a simple way to get a daily fix of new music and discover new artists, albums and genres.
          </p>
          <p>
            This is a non-commercial hobby project and is run on a best-effort basis. 
          </p>
      </CardContent>
    </Card>
  );
};

export default About;