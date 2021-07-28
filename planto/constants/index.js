export const POST_API_LINK = "https://jsonplaceholder.typicode.com/posts";
export const GET_DATA = "GET_DATA";
import { useSelector, useDispatch } from 'react-redux';

export const tmp = () => {
    const { content } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();
    
    const fetchData = () => dispatch(getData());
    return fetchData;
}

