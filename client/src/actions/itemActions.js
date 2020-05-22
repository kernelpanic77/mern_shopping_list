import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from "./types";
import axios from "axios";


export const getItems = () => dispatch => {
    dispatch(setItems_loading());
    axios.get('/api/items')
         .then(res => 
            dispatch( {
             type: GET_ITEMS,
             payload: res.data
         } ))
         .catch(err => {
             console.log(err);
         })
};

export const deleteItems = (id) => dispatch => {
   axios.delete(`/api/items/${id}`).then(res => dispatch({
       type: DELETE_ITEMS,
       payload: id,
   }))
};

export const addItem = (newItem) => dispatch => {
    axios
        .post('/api/items', newItem)
        .then(res => dispatch({
            type: ADD_ITEMS,
            payload: res.data
        }));
};

export const setItems_loading = () => {
    return {
        type : ITEMS_LOADING,
    }
}