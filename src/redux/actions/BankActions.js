import Axios from "axios"
import { getBanksUrl } from "../../Constants"
import { getBanksData } from "../../ActionConstants"


export const getBanks = () =>{

    return dispatch => {
        Axios.get(getBanksUrl).then(res =>{
            dispatch({
                type : getBanksData,
                payload : res.data
            })
        })
    }
}