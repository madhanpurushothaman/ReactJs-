import { GET_DATA } from "./searchType";
import axios from "axios";

//ActION CREATOR FOR GETDATA
//API CALLS DONE HERE
export const getDataAction = (data) => {
  return function (dispatch) {
    const url = `http://localhost:3001/recipe/${data.name1}/${data.name2}`;
    return axios({
      method: "get",
      url: url,
    }).then(function (response) {
      dispatch({ type: GET_DATA, payload: response.data });
    });
  };
};
