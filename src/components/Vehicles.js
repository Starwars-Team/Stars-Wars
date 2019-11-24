    import React, { useState, useEffect } from "react";
<<<<<<< HEAD
//     import Image from '../Assets/Images/vehicles/Imgres'
//     import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
=======
    import Image from '../Assets/Images/vehicles/Imgres'
    import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
>>>>>>> e022ec7be7b8ac0b81864b3d76725ab26078cd94


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

  let abc = state

  // console.log(Image[0].src);
  // const images = Image.map(item =>{
  //   return item.src
  // })


  return 
abc   
  
}



















{/* <div className="parentCard">

{Image.map(item => (
<Card style={{maxWidth: 345}} >
      <CardActionArea>
 
 <CardMedia style={{height : 140}}
 image={item.src}
 title="Contemplative Reptile"
/>
</CardActionArea>

</Card>

 ))}
{state.map(item => (
       <Card >
         <CardActionArea >

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          </CardContent>
          </CardActionArea>

</Card>
          ))}
{state.map(item => (

<Typography variant="body2" color="textSecondary" component="p">{item.name}
</Typography>

))}

        
        
      
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
  

</div>



 */}









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