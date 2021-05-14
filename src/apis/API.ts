import axios from 'axios';
import { StockHistoricalData, StockSymbol } from '../types/Types';

export const API = axios.create({
  baseURL: `http://localhost:3001/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export function getHistoricalData(symbol: string): Promise<Array<StockHistoricalData>> {
  return API.get(`dayHistoricalData/${symbol}`).then(res => {
    // @ts-ignore
    return Promise.resolve(res.data);
  }).catch((error: string) => {
    console.error('ERROR: ', error)
    return Promise.reject(error);;
  });
}

export function searchSymbol(searchText: string): Promise<Array<StockSymbol>> {
  return API.get(`stockSymbols/${searchText}`).then(res => {
    if (res.data) {
      // @ts-ignore
      const data = res.data.map((value) => ({ label: `${value.name} ( ${value.symbol})`, value }))
      return Promise.resolve(data);
    }
  }).catch((error: string) => {
    console.error('ERROR: ', error)
    return Promise.reject(error)
  });

}