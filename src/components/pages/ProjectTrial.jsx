import * as React from "react";

import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  Grid,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function Projects() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card sx={{ maxWidth: 600, marginTop: 15 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Projects;
