import { getHistoricalData } from '../../apis/API';
import { Action, StockHistoricalData } from '../../types/Types';
import { setHistoricalData } from './historicalData.actions';
import { SET_HISTORICAL_DATA, SET_PAGE_CARD_SECTION, SET_PAGE_GRID_SECTION } from './historicalData.types';
const reducer = (state = {}, action: Action) => {
  switch (action.type) {
    case SET_HISTORICAL_DATA:
      return {
        ...state, historicalData: action.payload, cardPage: 1, gridPage: 1
      };
    case SET_PAGE_CARD_SECTION:
      return {
        ...state, cardPage: action.payload
      };
    case SET_PAGE_GRID_SECTION:
      return {
        ...state, gridPage: action.payload
      };
    default: return state;
  }
};

export function getHistoricalDataThunk(symbol: string) {
  // @ts-ignore
  return (dispatch) => {
    return getHistoricalData(symbol).then(
      (data: Array<StockHistoricalData>) => dispatch(setHistoricalData(data)),
      (error) => {

      },
    );
  };
}
export default reducer;