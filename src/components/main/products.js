/* eslint-disable no-unused-vars */
import React from 'react' ;
import {connect} from 'react-redux' ;
import {chooseList} from '../../store/products-store.js';
import {addItem} from '../../store/cart-store.js';

const Status = props => {
  console.log('products props' , props);

  return(
    <><div className="card">
      <h2>{props.selector.current} Cars Models</h2>
      <div className="card_in">
        {props.list.output.map((val , idx) => {
          return  <li key={idx} onClick={()=> props.addItem(val)}>{val}</li>;
        }) }</div></div>
    <br></br>
    </>
  );
};

const mapStateToProps = state => {
  return state ;
};

const mapDispatchToProps = {chooseList , addItem};



export default connect(mapStateToProps, mapDispatchToProps)(Status);