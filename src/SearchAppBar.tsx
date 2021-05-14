import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import Select from 'react-select';
import Typeahead from './Typeahead';
import { StockSymbol } from './types/Types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' }
]

function SearchAppBar({ stockSymbol }: { stockSymbol: StockSymbol }): React.ReactElement {
  const classes = useStyles();
  const [stockSymbolString, setStockSymbolString] = useState('');
  useEffect(() => {
    const str = !isEmpty(stockSymbol) ? ` - ${stockSymbol.name} (${stockSymbol.symbol})` : '';
    setStockSymbolString(str)
  }, [stockSymbol]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {`STOCK ANALYTICS${stockSymbolString}`}
          </Typography>
          <div style={{ width: '200px' }}>
            <Select
              defaultValue={options[0]}
              options={options}
              isDisabled={true}
            />
          </div>
          <div className={classes.search}>
            <Typeahead className={classes.inputInput} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// @ts-ignore 
const mapStateToProps = (state) => {
  return {
    stockSymbol: state.symbolSearch,
  };
};

export default connect(mapStateToProps)(SearchAppBar);