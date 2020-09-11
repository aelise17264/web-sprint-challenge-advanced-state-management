export const initialState = {
    smufs = [],
    loadingMessage: false,
    errorMessage: ''
}


export default(state = initialState, action) => {
    switch(action.type){
        case SMURF_LIST:
            return{
                ...state,
                loadingMessage: true,
            };
        case SMURF_LOAD_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                loadingMessage: false
            }    
        case SMURF_LOAD_FAIL:
                return{
                    ...state,
                    loadingMessage: false
                }    

        default: return state;
    }
}