import Axios from "axios"
import { getDashUrl } from "../../Constants"
import { getDashboardData } from "../../ActionConstants"



export const getDashboard = () => {

    return dispatch =>{
        Axios.get(getDashUrl).then(res =>{
            dispatch({
                type : getDashboardData,
                payload : res.data
            })
        })
        .catch(err => console.log(err))
    }

}