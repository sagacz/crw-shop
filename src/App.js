import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShoPage from './pages/shoppage/shoppage.component';
import ShopPage from './pages/shoppage/shoppage.component';


const HatsPage = () => (
    <div>
      <h1 class='title'>HATS PAGE</h1>
    </div>
  );



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>

  )
}

export default App;
