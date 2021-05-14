import { combineReducers } from 'redux';
import symbolSearchReducer from './symbolSearch/symbolSearch.reducer';
import historicalDataReducer from './historicalData/historicalData.reducer';

const rootReducer = combineReducers({
    symbolSearch: symbolSearchReducer,
    historicalData: historicalDataReducer,
});
export default rootReducer;