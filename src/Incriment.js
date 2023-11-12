import React, { useState } from 'react';



const Incriment = () => {
const [number, setNumber] = useState(0);


  return (
    <div>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number+1)}>incriment</button>
        <button onClick={()=>{ if(number>0){setNumber(number-1)}}}>dicriment</button>
      
    </div>
  )
}

export default Incriment;
