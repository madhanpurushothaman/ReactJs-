import { GET_DATA } from "../actions/searchType";
const intialState = {};

/**
 *reducer for getdata from search component
 * @param {state of the store} state
 * @param {action from the dispatch } action
 */
export default function reducer(state = intialState, action) {
  switch (action.type) {
    case GET_DATA:
      var item = false;
      if (action.payload.length === 0) {
        item = true;
      }
      state = action.payload;
      state.ItemFound = item;
      state.hidden = false;

      break;
    default:
      return state;
  }
  return state;
}
