import React, { useState, useEffect } from "react";

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

  console.log(statenxt);
  

  return (
    <div>
     {state.map(item => (<React.Fragment key={item.name}>
     <h4 >{'page 1 '+item.name}</h4>
     <picture>{'page 1 '+item.model}</picture>
     </React.Fragment>
      ))}

{statenxt.map(item => (<React.Fragment key={item.name}>
     <h4 >{'page 2 '+item.name}</h4>
     <p>{'page 2 '+item.model}</p>
     </React.Fragment>
      ))}
    </div>
  );
}
