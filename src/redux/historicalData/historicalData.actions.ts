import { StockHistoricalData } from '../../types/Types';
import { SET_HISTORICAL_DATA, SET_PAGE_CARD_SECTION, SET_PAGE_GRID_SECTION } from './historicalData.types';
export const setHistoricalData = (payload: Array<StockHistoricalData>) => {
    return {
        type: SET_HISTORICAL_DATA,
        payload
    };
};
export const setCardSectionPage = (payload: number) => {
    return {
        type: SET_PAGE_CARD_SECTION,
        payload
    };
};
export const setGridSectionPage = (payload: number) => {
    return {
        type: SET_PAGE_GRID_SECTION,
        payload
    };
};