import React, { useState, useEffect } from "react";
import Imagers from "../../Assets/Images/vehicles/Imgres";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

export default function Vehicles() {
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

  let imagerss = Imagers;
  // console.log(imagerss);

  let comfet = [...state, ...statenxt];
  // console.log(comfet);

  let combi = [];

  for (let i = 0; i < comfet.length; i++) {
    combi[i] = {
      id: imagerss[i].id,
      name: comfet[i].name,
      image: imagerss[i].src
    };
  }
  console.log(combi);

  //SAMPLE HOW TO MARGE 2 OBJET ON ARRAY

  //  var arr1 = [{name: 'Jay'}, {name: 'Bob'}];
  // var arr2 = [{age: 22}, {age: 30}];
  // var combined = [];

  // for (var i = 0; i < arr1.length; i++) {
  //   combined[i] = {name: arr1[i].name, age: arr2[i].age};
  // }

  // console.log(combined);

  return (
    <div className="makeFlex">
      {combi.map(item => (
        <Card style={{ width: 345, margin: 20 }}>
          <CardActionArea>
            <CardMedia
              style={{ height: 140 }}
              image={item.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
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
      ))}
    </div>
  );
}
