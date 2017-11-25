import userAPI from '../../API/api';

export const GET_ALL_XE="GET_ALL_XE";
export const GET_ALL_XE_ERROR="GET_ALL_XE_ERROR";
export const GET_ALL_XE_SUCCESS="GET_ALL_XE_SUCCESS";


export function getListXe(){
    return async dispatch =>{
        dispatch({
            type: GET_ALL_XE
        });
        try {
            const data = await userAPI.getListXe();
            return dispatch({
                type: GET_ALL_XE_SUCCESS,
                listxe: data.data.result
            });
        } catch (error) {
            return dispatch({
                type: GET_ALL_XE_ERROR,
                error
            })
        }
    }
}