export interface StockHistoricalData {
  historicalDate: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  adjClose: number;
}

export interface StockSymbol {
  symbol: string;
  name: string;
}

export interface Action {
  type: string,
  payload: any
}