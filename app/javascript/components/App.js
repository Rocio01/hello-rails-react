import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HelloWorld from './HelloWorld'
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
         <Router>
        <Routes>
          <Route path="/" element= { ("Home!") }/>
          <Route path="/hello" element={ <HelloWorld greeting="Friend" /> } />
        </Routes>
      </Router>
      </React.Fragment>
    );
  }
}

export default App
