const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

export default function getGreetings(){
  console.log('getGreetings')
  return dispatch => {
    dispatch({type: GET_GREETINGS_REQUEST});
    return fetch('v1/greetings.json')
    .then(response => response.json())
    .then(json => dispatch(getGreetingsSuccess(json)))
    .catch(error => console.log(error));
  }
}

export function getGreetingsSuccess(json){
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  }
}