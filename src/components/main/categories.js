/* eslint-disable no-unused-vars */
import React from 'react' ;
import {connect} from 'react-redux' ;
import {changeSelected} from '../../store/categories-store.js';
import {chooseList} from '../../store/products-store.js';


const status = props => {
  console.log('props.', props);
  return(
    <>
      {props.current.categories.map( (val , idx) => {
        return <div className="navigation2"> <a className="rss" key={idx} onClick={()=> {props.changeSelected(val);
          props.chooseList(val);}}> {val} </a></div>;})}
    </>
  );
};


const mapStateToProps = state =>{
  return {current: state.selector};
};

const mapDespatchToProps = {changeSelected,chooseList} ;


export default connect(mapStateToProps,mapDespatchToProps)(status);