import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';
import store from "../redux/configureStore";
import { Provider } from "react-redux";


class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Provider store={store}>
         <Router>
        <Routes>
          <Route path="/" element= { ("Home!") }/>
          <Route path="/greeting" element={ <Greeting greeting="Friend" /> } />
        </Routes>
      </Router>
      </Provider>
      </React.Fragment>
    );
  }
}

export default App
