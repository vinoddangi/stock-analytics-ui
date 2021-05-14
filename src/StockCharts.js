import React from 'react';
import {
    Chart, getSeries
} from 'react-charts';
import moment from 'moment';
import { connect } from 'react-redux';

function getVolumeData(item) {
    return [item.historical_date, item.day_volume]

}
function StockCharts({ pageHistoricalData }) {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    return (
        (pageHistoricalData && pageHistoricalData.length) ? (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 27, 45, 0.9)',
                }}
            >
                <Chart data={data} axes={axes} tooltip dark />
            </div>
        )
            : <div></div>
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

export default connect(mapStateToProps)(StockCharts);