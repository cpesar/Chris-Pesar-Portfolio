import * as React from "react";

import projects from "../../data.js";

import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  Grid,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  // Divider,
} from "@mui/material";

function Projects({ id, title, description, site, repo }) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid>
        <Card sx={{ maxWidth: 500, marginTop: 15, marginRight: 2 }}>
          <CardHeader>This is the card header</CardHeader>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Card.Title>{projects.title}</Card.Title>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View the site!
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid>
        <Card sx={{ maxWidth: 500, marginTop: 15, marginRight: 2 }}>
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
              View the site!
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid>
        <Card sx={{ maxWidth: 500, marginTop: 15, marginRight: 2 }}>
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
              View the site!
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Projects;
