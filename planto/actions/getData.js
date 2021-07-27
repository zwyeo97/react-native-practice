import { POST_API_LINK, GET_DATA } from '../constants/index';
const axios = require('axios');

// export async function getData(dispatch, getState){
//     const response = await getDataAction();
//     dispatch(response);
// }


// }


export const getData= () => {
    try{
        return async dispatch => {
            const res = await axios.get(POST_API_LINK);
            if (res.data){
                dispatch({
                    type: GET_DATA,
                    payload: res.data,
                });
            }
            else{
                console.log("Fetching error");
            }

        }
    }catch(error){
        console.log(error);
    }
}