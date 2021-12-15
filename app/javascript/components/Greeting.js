import React from "react";
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';

function getGreetings(){
  console.log('getGreetings')
  return {
    type: GET_GREETINGS_REQUEST
  }
}


class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
      Greeting: {this.props.greeting}
      <button className="getGreetingsBtn" onClick={()=> this.props.getGreetings()}>getThings</button>

      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.myGreetings,
})
const mapDispatchToProps = {getGreetings};
export default connect(structuredSelector, mapDispatchToProps)(Greeting);


