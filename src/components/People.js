import React, { useState, useEffect } from "react";
import Imagers from '../Assets/Images/poeple/People'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function People() {





const axios = require("axios").default;

const [state, setState] = useState([]);
const [statenxt, setStatenxt] = useState([]);

useEffect(() => {
axios.get("https://swapi.co/api/people").then(response => {
  setState(response.data.results);
});
}, []);

useEffect(() => {
axios.get("https://swapi.co/api/people/?page=2").then(response => {
  setStatenxt(response.data.results);
});
}, []);

let imagerss = Imagers
// console.log(imagerss);

let comfet = [...state, ...statenxt]
// console.log(comfet);






let combi = [];

for (let i = 0; i < comfet.length; i++){
combi[i] = {id: imagerss[i].id ,name: comfet[i].name, image: imagerss[i].src};
}
console.log(combi);


return (
  <div className="makeFlex">
  {combi.map(item=>(
<Card style={{width: 345, margin: 20}} >
    <CardActionArea>
      <CardMedia style={{height : 140}}
        image={item.image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {item.name}
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

))}


</div>
)
}








//  FROM AKLA


// import React, { Component } from "react";
// import Card from "@material-ui/core/Card";
// import { Link } from "react-router-dom";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";

// import Typography from "@material-ui/core/Typography";
// import axios from "axios";

// const API_STRING = process.env.API_STRING;

// export default class People extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//   }

//   componentDidMount = () => {
//     axios
//       .get(API_STRING + '/people/')
//       .then(res => {
//         this.setState({ data: res.data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-around",
//           background: ""
//         }}
//       >
//         {this.state.data.length > 0 &&
//           this.state.data.map((item, key) => {
//             return (
//               <Card style={{ maxWidth: "400px", margin: "20px" }} key={key}>
//                 <CardContent>
//                   <Typography color="textSecondary">{item.email}</Typography>
//                   <Typography variant="body1" component="p">
//                     Hello my name is {item.name}
//                   </Typography>
//                   <br />
//                   <Typography variant="subtitle2" component="p">
//                     Hair Color : {item.hair_color}
//                   </Typography>
//                   <Typography variant="subtitle2" component="p">
//                     gender: {item.gender}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small">
//                     <Link to={`/users/${item.id}`}>Learn More</Link>
//                   </Button>
//                 </CardActions>
//               </Card>
//             );
//           })}
//       </div>
//     );
//   }
// }
