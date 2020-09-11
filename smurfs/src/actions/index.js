import axios from 'axios';

export const SMURF_LIST = 'SMURF_LIST';
export const SMURF_LOAD_SUCCESS = 'SMURF_LOAD_SUCCESS';
export const SMURF_LOAD_FAIL = 'SMURF_LOAD_FAIL';

export const getSmurfs = () => {
    return (dispatch) =>{
        dispatch({type: SMURF_LIST});
        axios.get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log('success with axios get')
            dispatch({type: SMURF_LOAD_SUCCESS, payload: res.data})
        })
        .catch((error) => {
            dispatch({type: SMURF_LOAD_FAIL})
            console.log('error with axios get')
        })
    }
}