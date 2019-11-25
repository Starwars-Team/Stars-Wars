import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Yoga from '../Assets/Images/about/iron.jpg'
import Akla from '../Assets/Images/about/pwmrh.jpg'
import Hafiz from '../Assets/Images/about/alien.jpg'
import Amir from '../Assets/Images/about/spiderman.png'
import Logo from '../Assets/Images/about/logo.png'
import { Link } from '@material-ui/core';


const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 260,
  },
});

export default function About() {
  const classes = useStyles();

  return (
      <React.Fragment>
          <div className="parentabout">
                        <img src={Logo}></img>
                        </div>
      <div className="about">
    <Card className={classes.card}
    style={{margin:20}}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Amir}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Amirullah S. Kasang
          </Typography>
          <Typography gutterBottom variant="h8" component="h4">
            Full Stack Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Link href="https://github.com/Amirullah23">
        <Button size="small" color="primary">
          Github
        </Button>
        </Link>
       
      </CardActions>
    </Card>

    <Card className={classes.card}
    style={{margin:20}}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Hafiz}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Hafiz Yanuar Ibrahim
          </Typography>
          <Typography gutterBottom variant="h8" component="h4">
            Full Stack Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="https://github.com/hfzynr">
        <Button size="small" color="primary">
          Github
        </Button>
        </Link>
      </CardActions>
    </Card>
    
    <Card className={classes.card}
    style={{margin:20}}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Yoga}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Yoga Pratama
          </Typography>
          <Typography gutterBottom variant="h8" component="h4">
            Full Stack Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="https://github.com/yogamhd">
        <Button size="small" color="primary">
          Github
        </Button>
        </Link>
      </CardActions>
    </Card>


    <Card className={classes.card}
    style={{margin:20}}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Akla}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Ahmad Rafiqul A'la
          </Typography>
          <Typography gutterBottom variant="h8" component="h4">
            Full Stack Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href="https://github.com/ahmdkla">
        <Button size="small" color="primary">
          Github
        </Button>
        </Link>
      </CardActions>
    </Card>
    </div>

    </React.Fragment>
  );
}