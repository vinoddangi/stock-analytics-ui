import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },
  cardContentRoot: {
    padding: 6,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
});

function GetDetails({ label, price }: any) {
  return <div style={{ width: '50px' }}>

    <Typography>
      <Box fontWeight="fontWeightLight" fontSize={12} textAlign="center" color='gray'>
        {label}
      </Box>
    </Typography>
    <Typography>
      <Box fontWeight="fontWeightBold" fontSize={16} textAlign="center">
        {price}
      </Box>
    </Typography>
  </div>
}
// @ts-ignore
function StockCard({
  historical_date,
  day_open,
  day_high,
  day_low,
  day_close,
  day_volume
}: any) {
  const classes = useStyles();

  return (
    <Grid item xs={2} key={`key-${moment(historical_date).format('YYYY-MM-DD')}`}>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.cardContentRoot}>
          <Typography variant="h6">
            {moment(historical_date).format('YYYY-MM-DD')}
          </Typography>
          <Grid container xs={12} spacing={1} >
            <Grid item xs={6} spacing={1}>
              <GetDetails label='High' price={day_high} />
            </Grid>
            <Grid item xs={6} spacing={1}>
              <GetDetails label='Low' price={day_low} />
            </Grid>
            <Grid item xs={4} spacing={1}>
              <GetDetails label='Open' price={day_open} />
            </Grid>
            <Grid item xs={4} spacing={1}>
              <GetDetails label='Close' price={day_close} />
            </Grid>
            <Grid item xs={4} spacing={1}>
              <GetDetails label='volume' price={day_volume} />
            </Grid>
          </Grid>


        </CardContent>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Details
        </Button>
        </CardActions> */}
      </Card>
    </Grid >
  );
}

// @ts-ignore
function StockCards({ pageHistoricalData }): React.ReactElement {
  return <>
    {pageHistoricalData.map((data: any) => <StockCard {...data} />)}
  </>;
}

// @ts-ignore
const mapStateToProps = (state) => {
  const { historicalData, cardPage } = state.historicalData;
  const start = (cardPage - 1) * 12;
  const totalLength = !!historicalData ? historicalData.length : 0;
  const end = totalLength > (start + 12) ? (start + 12) : totalLength;
  const pageHistoricalData = historicalData ? historicalData.slice(start, end) : [];
  return {
    pageHistoricalData
  };
};

export default connect(mapStateToProps)(StockCards);