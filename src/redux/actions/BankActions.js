import Axios from "axios"
import { getBanksUrl , getBankDashUrl} from "../../Constants"
import { getBanksData, getBankDashboard } from "../../ActionConstants"


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


export const getBankDash = (tenant) =>{
    const json = {
        tenantId: tenant
    };
    return dispatch => {
    Axios
      .request({
        method: "POST",
        url: getBankDashUrl,
        data: json
      })
      .then(response => {
        console.log(response)
        dispatch({
            type : getBankDashboard,
            payload : response.data
        })
      })
    };
}