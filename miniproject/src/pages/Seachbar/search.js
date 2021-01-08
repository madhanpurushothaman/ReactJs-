import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./search.css";

import { getDataAction } from "../../actions/SearchAction";

/**
 * Search function used for pickingup the values from the form
 * @param {props from the dispatch}
 */
const Search = ({ get_data, data }) => {
  //STATE IN SEARCH COMPONENTS
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [hidden, setHidden] = useState(false);
  const [ItemFound, setItemFound] = useState(false);
  //HANDLES THE EVENT FROM THE  INGRIDENT  INPUT FEILD
  const handleNameChange = (event) => {
    setName1(event.target.value);
    setItemFound(false);
  };
  //HANDLES THE EVENT FROM THE  DISH  INPUT FEILD
  const handleName2Change = (event) => {
    setName2(event.target.value);
    setItemFound(false);
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    setHidden(true);
    get_data({ name1, name2 });
  };

  //REACT HOOK WHICH IS USED TO RENDER THE COMPONENT WHEN THERE IS ACHANGE IN THE STORE DATA
  useEffect(() => {
    if (!data.hidden) {
      setHidden(false);
    }
    if (data.ItemFound) {
      setItemFound(true);
    }
  }, [data]);

  return (
    <div className="search">
      <form onSubmit={handlerSubmit}>
        <div className="form-inputs">
          <div className="form-control">
            <label>Ingredients</label>
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={name1}
              onChange={handleNameChange}
              required
            ></input>
          </div>
          <div className="form-control">
            <label> Dish</label>
            <input
              className="search-input"
              placeholder="Search"
              type="text"
              value={name2}
              onChange={handleName2Change}
              required
            ></input>
          </div>
          <button className="button-class" type="submit">
            submit
          </button>
        </div>

        {ItemFound ? <span className="itemFound"> Item Not found</span> : null}
      </form>
      {hidden ? (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
    </div>
  );
};

/**
 * MAPPING DISPATCH TO PROPS FOR SEARCH COMPONENT
 * @param {USING DISPATCH WE CAN SEND THE ACTION TO REDUCER} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    get_data: (data) => {
      dispatch(getDataAction(data));
    },
  };
};

/**
 * mapping state to props for the  search  component
 * @param {store from redux } store
 */

const mapStateToProps = (store) => {
  return {
    data: store,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
