import { combineReducers } from "redux";

import {dashboard} from './DashboardReducer';
import {banks} from './BankReducer';
import {atms} from './AtmReducer';

const rootReducer = combineReducers({
    dashboard,
    banks,
    atms
});

export default rootReducer;