import React from 'react';
import {connect} from 'react-redux';
import Smurf from './Smurf'

function Smurfs({smurfs}){
    // console.log(smurfs.smurfs)
    return(
        
        <div className='smurfInfo'>
        {
            smurfs.map((item) => {
                return<Smurf
                key={item.id}
                item={item}/>
            })
        }

        </div>
        
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurfs)