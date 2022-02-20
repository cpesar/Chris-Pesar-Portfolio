import React from "react";

// import Carousel from "react-material-ui-carousel";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

function ProjectItem({ item }) {
  return (
    // <Carousel>
    <Card sx={{ maxWidth: 800, marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="400"
        // image="https://curated-uploads.imgix.net/AgAAAB0Auodf8ALzM9my5Bww1FPu2g.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ar=16%3A11&fit=crop&ixlib=react-9.3.0"
        image={item.img}
        alt="weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Website</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
    // {/* </Carousel> */}
  );
}

export default ProjectItem;
