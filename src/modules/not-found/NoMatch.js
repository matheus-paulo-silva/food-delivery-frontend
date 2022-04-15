import React from "react";
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

import './styles.scss'
                                          
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}


export default NoMatch