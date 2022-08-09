import React from 'react';
import './App.css';
import PageHeader from './Header/container';
import Tiles from './Tiles/container';
import TabMenus from './TabMenus/index';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Tiles />
      <TabMenus />
    </div>
  );
}

export default App;
