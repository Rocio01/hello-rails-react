const SET_GREETINGS = 'hello-rails-react/greetings/SET_GREETINGS';
const initialState = {
  greetings: [],
};

const setGreetings = (payload) => ({
  type: SET_GREETINGS,
  payload,
});

export const fetchGreeting = () => async (dispatch) => {
  await fetch('v1/greetings.json')
    .then(response => response.json())
    .then(json => dispatch(setGreetings(json)))
}

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETINGS:
      return { ...state, greetings: action.payload };
    default:
      return state;
  }
};

export default greetingsReducer;