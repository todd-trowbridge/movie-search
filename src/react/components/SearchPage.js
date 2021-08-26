import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { saveMovie } from "../../redux";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
    objectFit: "fit",
  },
}));

function SearchPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    let url = "http://www.omdbapi.com/?apikey=59354c85&s=";
    e.preventDefault();
    fetch(encodeURI(url + searchTerm))
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit" color="primary">
          Submit
        </Button>
      </form>
      <br />
      <br />
      <div>
        <Grid container spacing={10}>
          {movies.map((favorite) => {
            return (
              <Grid item xs={3}>
              <Card className={classes.root} key={favorite.Title}>
                <CardMedia
                  className={classes.media}
                  image={favorite.Poster}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {favorite.Title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {favorite.Year}
                  </Typography>
                  <Button
                    color="primary"
                    onClick={() => dispatch(saveMovie(favorite))}
                  >
                    <FavoriteTwoToneIcon color="primary" fontSize="large"/>
                  </Button>
                </CardContent>
              </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default SearchPage;
