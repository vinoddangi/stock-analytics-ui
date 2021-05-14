import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import { setCardSectionPage } from './redux/historicalData/historicalData.actions';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(1),
        },
    },
}));

// @ts-ignore
function StockPagination({ handleChange, count }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            { count > 0 && <Pagination count={count} color="secondary" onChange={handleChange} size="small" />}
        </div>
    );
}

// @ts-ignore
const mapStateToProps = (state) => {
    const calCount = state.historicalData.historicalData ? (state.historicalData.historicalData.length / 12) : 0
    const count = Math.ceil(calCount);
    return {
        count
    };
};
// @ts-ignore
const mapDispatchToProps = (dispatch) => {
    // @ts-ignore
    return {
        // @ts-ignore
        handleChange: (event, value) => {
            // @ts-ignore
            dispatch(setCardSectionPage(value));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockPagination);