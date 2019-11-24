    import React, { useState, useEffect } from "react";
    import Image from '../Assets/Images/vehicles/Imgres'
    import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function Vehicles() {

    
  const axios = require("axios").default;

  const [state, setState] = useState([]);
  const [statenxt, setStatenxt] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/vehicles").then(response => {
      setState(response.data.results);
    });
  }, []);

  useEffect(() => {
    axios.get("https://swapi.co/api/vehicles/?page=2").then(response => {
      setStatenxt(response.data.results);
    });
  }, []);

  // console.log(Image[0].src);
  // const images = Image.map(item =>{
  //   return item.src
  // })


  return (
<div>


<Card style={{maxWidth: 345}} >
      <CardActionArea>
 {Image.map(item => (
 <CardMedia style={{height : 140}}
 image={item.src}
 title="Contemplative Reptile"
/>
 ))}

       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
</div>

















    // <div>
    //   {stateandimg.map(item => (
    //     <React.Fragment key={item.name}>
    //       <img src={item.src}></img>
    //       <h4>{"page 1 " + item.name}</h4>
    //       {/* <picture>{'page 1 '+item.model}</picture> */}
    //       {/* <p>{abc++}</p> */}
    //     </React.Fragment>
    //   ))}

    //   {statenxt.map(item => (
    //     <React.Fragment key={item.name}>
    //       <h4>{"page 2 " + item.name}</h4>
    //       <p>{"page 2 " + item.model}</p>
    //     </React.Fragment>
    //   ))}
    // </div>
  );
}
