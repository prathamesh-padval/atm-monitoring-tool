import { combineReducers } from "redux";

import {banks} from './BankReducer';

const rootReducer = combineReducers({
    banks
});

export default rootReducer;