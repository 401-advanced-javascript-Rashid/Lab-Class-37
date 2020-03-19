/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';

const status = props => {
  return(
    <>
      <div className="card">
        <h2>Cars List</h2>
        <div className="card_in">
          {props.items.inCart.map((val , idx)=>{
            return <li key={idx}>{val}</li>;
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return{items: state.cart};
};

export default connect(mapStateToProps)(status);

