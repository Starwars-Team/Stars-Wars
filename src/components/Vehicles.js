    import React, { useState, useEffect } from "react";
    import Imagers from '../Assets/Images/vehicles/Imgres'

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

let imagerss = Imagers
// console.log(imagerss);

let comfet = [...state, ...statenxt]
// console.log(comfet);






let combi = [];

for (let i = 0; i < comfet.length; i++){
  combi[i] = {id: imagerss[i].id ,name: comfet[i].name, image: imagerss[i].src};
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
    <div>

{combi.map(item=>(
  <React.Fragment>
    <img src={item.image}></img>
<h1>{item.name}</h1>
<p>{item.id}</p>
</React.Fragment>
  ))}
    </div>
  )
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