import React from 'react';
import './App.css';
import Start from './containers/Start'
import Nav from './containers/Nav/Nav'
import Home from './containers/Home/Home'
import AccName from './containers/AccName/AccName'
import Shop from './containers/Shop/Shop'
import ItemDetail from './containers/ItemDetail/ItemDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/DepositWithdraw' element={<Start />} />
          <Route path='/AccountName' element={<AccName />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Shop/:id' element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;