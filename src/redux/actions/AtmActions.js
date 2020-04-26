import { getAtmsUrl } from "../../Constants";
import { getAtmsData } from "../../ActionConstants";
import Axios from "axios";



export const getAtms = (tenant) => {
    const json = {
        tenantId: tenant
    };
    return dispatch => {
    Axios
      .request({
        method: "POST",
        url: getAtmsUrl,
        data: json
      })
      .then(response => {
        console.log(response)
        dispatch({
            type : getAtmsData,
            payload : response.data
        })
      })
    };
  };