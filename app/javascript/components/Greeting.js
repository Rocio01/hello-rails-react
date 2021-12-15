import React from "react";
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import getGreetings from '../greetings';


class Greeting extends React.Component {
  render () {
    const { greetings } = this.props;
    // const greet = greetings.map((i)=>{
    //   return <span> {i.title}</span>
    // })
    return (
      <React.Fragment>
      Greeting: {this.props.greeting}
      <button className="getGreetingsBtn" onClick={()=> this.props.getGreetings()}>getThings</button>
      <br />
      <div>{greetings}</div>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
})
const mapDispatchToProps = {getGreetings};
export default connect(structuredSelector, mapDispatchToProps)(Greeting);


