import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { connect } from 'react-redux';
import moment from 'moment';
import { ValueFormatterParams } from 'ag-grid-community';


function dateValueFormatter(params: ValueFormatterParams): string {
    return moment(params.value).format('YYYY-MM-DD')
}
// @ts-ignore
function StockGrid({ pageHistoricalData }) {
    return (
        pageHistoricalData && pageHistoricalData.length && <div className="ag-theme-balham-dark" style={{ height: 430, width: 570, padding: '20px 10px 10px 10px' }}>
            <AgGridReact
                rowData={pageHistoricalData}>
                <AgGridColumn field="historical_date" headerName='Date' valueFormatter={dateValueFormatter} width={90}></AgGridColumn>
                <AgGridColumn field="day_open" headerName='Open' width={70}></AgGridColumn>
                <AgGridColumn field="day_high" headerName='High' width={70}></AgGridColumn>
                <AgGridColumn field="day_low" headerName='Low' width={70}></AgGridColumn>
                <AgGridColumn field="day_close" headerName='Close' width={70}></AgGridColumn>
                <AgGridColumn field="day_adj_close" headerName='Adj. Close' width={80}></AgGridColumn>
                <AgGridColumn field="day_volume" headerName='Volume' width={100}></AgGridColumn>
            </AgGridReact>
        </div>
    );
}

// @ts-ignore
const mapStateToProps = (state) => {
    const { historicalData, gridPage } = state.historicalData;
    const start = (gridPage - 1) * 14;
    const totalLength = !!historicalData ? historicalData.length : 0;
    const end = totalLength > (start + 14) ? (start + 14) : totalLength;
    const pageHistoricalData = historicalData ? historicalData.slice(start, end) : [];
    return {
        pageHistoricalData
    };
};

export default connect(mapStateToProps)(StockGrid);