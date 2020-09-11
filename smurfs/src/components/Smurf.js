import React from 'react';

function Smurf({item}){
return(

    <div className='smurf'>
        <h2>{item.name}</h2>
<h3>Age: {item.age}</h3>
<h3>Height: {item.height}</h3>

    </div>
)

}

export default Smurf