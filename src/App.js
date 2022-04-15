import React from 'react'
import { Details, CustomerList } from './modules/customer'
import NoMatch from './modules/not-found/NoMatch'
import MainMenu from './template/menu/main-menu'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './styles/index.scss'

function App() {

  return (
    <Router>
      <div className="app-content">
      <MainMenu />
        <Routes>
          <Route path="/customer/:id" exact element={<Details />} />
          <Route path="/customer" exact element={<CustomerList />} />
          <Route path="*" exact element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
