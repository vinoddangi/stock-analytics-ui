import React from 'react';
import SearchAppBar from './SearchAppBar';
import { Main } from './Main';
import './App.css';

function App(): React.ReactElement {
  return (
    <div>
      <SearchAppBar />
      <Main />
    </div >
  );
}

export default App;
