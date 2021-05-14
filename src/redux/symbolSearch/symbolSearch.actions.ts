import { StockSymbol } from '../../types/Types';
import { SYMBOL_SELECT } from './symbolSearch.types';
export const selectSymbol = (payload: StockSymbol) => {
    return {
        type: SYMBOL_SELECT,
        payload
    };
};