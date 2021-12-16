import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  const greetingState = useSelector((state) => state.greetingsReducer.greetings.title);
  return (
    
      <span>Greeting: {greetingState}</span>
    
  );
}


export default Greeting
