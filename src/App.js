import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Form from './form/Form'
import Form2 from './form/Form2'
import NoMatch from './routes/NoMatch'
import MainMenu from './menu/main-menu'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './styles.scss'

function App() {

  return (
    <Router>
      <div className="app-content">
      <MainMenu />
        <Routes>
          <Route path="/form" exact element={<Form />} />
          <Route path="/form2" exact element={<Form2 />} />
          <Route path="*" exact element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
