import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StockCards from './StockCards';
import StockPagination from './StockPagination';
import StockGrid from './StockGrid';
import StockCharts from './StockCharts';
import GridPagination from './GridPagination';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1} direction='column' alignItems='stretch'>
        <Grid container item xs={12} spacing={1}>
          <StockCards />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <StockPagination />
        </Grid>

      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid container item xs={5} spacing={1}>
          <StockGrid />
          <GridPagination />
        </Grid>
        <Grid container item xs={7} spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <StockCharts />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <StockPagination />
          </Grid>
        </Grid>
      </Grid>

    </div >
  );
}