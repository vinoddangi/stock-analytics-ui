import { Action } from '../../types/Types';
import { SYMBOL_SELECT } from './symbolSearch.types';
const reducer = (state = {}, action: Action) => {
    switch (action.type) {
        case SYMBOL_SELECT:
            return {
                ...action.payload,
            };
        default: return state;
    }
};
export default reducer;