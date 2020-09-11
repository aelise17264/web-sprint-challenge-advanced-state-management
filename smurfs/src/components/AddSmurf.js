import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postSmurf} from '../actions';
import {v4 as uuid} from 'uuid'

const AddSmurf = (props)=>{
const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: uuid()
})
const handleChange = (event) =>{
    setNewSmurf({
        ...newSmurf,
        [event.target.name]: event.target.value
    })
}

const onSubmit = (event) => {
    event.preventDefault();
    props.postSmurf(newSmurf)
}

return(
<div className='smurf-form'>
    <form onSubmit={onSubmit}>
    <input
    placeholder='name'
    name='name'
    value={newSmurf.name}
    onChange={handleChange}/>

<input
    placeholder='age'
    name='age'
    value={newSmurf.age}
    onChange={handleChange}/>
    
    <input
    placeholder='height'
    name='height'
    value={newSmurf.height}
    onChange={handleChange}/>

    <button type='submit'>Add a New Smurf!</button>
    </form>

</div>

)

}

export default connect (null, {postSmurf})(AddSmurf)