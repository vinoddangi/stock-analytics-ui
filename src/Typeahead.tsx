import React from 'react';
import AsyncSelect from 'react-select/async';
import { searchSymbol } from './apis/API';
import { connect } from 'react-redux';
import { selectSymbol } from './redux/symbolSearch/symbolSearch.actions';
import { StockSymbol } from './types/Types';
import { getHistoricalDataThunk } from './redux/historicalData/historicalData.reducer';

const styles = {
    // @ts-ignore
    option: (provided, state) => ({
        ...provided,
        color: 'black',
    })
};

function Typeahead(props: any): React.ReactElement {

    const [value, setValue] = React.useState();

    // @ts-ignore
    function loadOptions(inputValue: string): Promise<ReadonlyArray<OptionType | GroupType>> | void {
        return new Promise(resolve => {
            if (inputValue === '') {
                resolve([]);
            } else {
                searchSymbol(inputValue).then((data: Array<StockSymbol>) => {
                    resolve(data);
                }).catch((error: string) => {
                    resolve([]);
                });
            }
        });
    }
    // @ts-ignore
    function onSelectChange(option): void {
        setValue(option);
        props.selectSymbol(option.value);
    }


    return (
        <div style={{ width: '300px' }}>
            <AsyncSelect
                cacheOptions
                /* @ts-ignore*/
                loadOptions={loadOptions}
                inputProps={{ 'aria-label': 'search' }}
                styles={styles}
                placeholder="Search..."
                onChange={onSelectChange}
                value={value}
            />
        </div>
    );


}
// @ts-ignore
const mapStateToProps = (state) => {
    return {
        value: state.symbol,
    };
};
// @ts-ignore
const mapDispatchToProps = (dispatch) => {
    return {
        selectSymbol: (stockSymbol: StockSymbol) => {
            dispatch(selectSymbol(stockSymbol));
            dispatch(getHistoricalDataThunk(stockSymbol.symbol));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Typeahead);