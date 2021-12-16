import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  const greetingState = useSelector((state) => state.greetingsReducer.greetings);
  return (
    <div className="card pt-5 mt-5">
      <div className="card-body text-center">
        <h1>Greeting: {greetingState.title}</h1>
        <button className="btn btn-primary" onClick={() => window.location.reload()} > Click me! </button>     
     </div>
   </div>
  );
}


export default Greeting
