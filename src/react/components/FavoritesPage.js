import { React } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../redux/favorites/favoriteActions";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
}));

function Favorites() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const favorites = useSelector((state) => state.favoritesReducer.favorites);
  return (
    <div>
      <br />
      <Grid container spacing={10}>
        {favorites.map((favorite) => {
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
                    onClick={() => dispatch(removeMovie(favorite))}
                  >
                    <HighlightOffTwoToneIcon color="secondary" fontSize="large"/>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Favorites;
