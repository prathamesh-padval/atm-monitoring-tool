import { getBanksData } from "../../ActionConstants"


export const banks = (state=[] ,action) => {
    switch(action.type){
        case getBanksData :
            return [...action.payload]
        default:
            return state
    }
}