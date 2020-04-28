import { combineReducers } from "redux";

import {dashboard} from './DashboardReducer';
import {banks , bankDash} from './BankReducer';
import {atms} from './AtmReducer';

const rootReducer = combineReducers({
    dashboard,
    banks,
    bankDash,
    atms
});

export default rootReducer;