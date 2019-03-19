const LOAD = 'redux-form-examples/account/LOAD'
const REQUEST_CONTACT = 'REQUEST_CONTACT';
const RECEIVE_CONTACT = 'RECEIVE_CONTACT';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
    case RECEIVE_CONTACT:
      return {
        data: action.data
      }
    default:
      return state
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
//export const load = () => ({ type: LOAD, data })

export const actionCreators = {
    requestContact: () => async (dispatch, getState) => {
    //   if (startDateIndex === getState().weatherForecasts.startDateIndex) {
    //     // Don't issue a duplicate request (we already have or are loading the requested data)
    //     return;
    //   }
  
      dispatch({ type: REQUEST_CONTACT });
  
      const url = `api/contact/1`;
      const response = await fetch(url);
      const data = await response.json();
  
      dispatch({ type: RECEIVE_CONTACT, data });
    }
  };

export default reducer
