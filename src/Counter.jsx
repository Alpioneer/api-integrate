import React, { useReducer } from 'react';



const sexreducer = (state,action) => {

  
  switch(action.type){
    
    case 'INCREMENT':
      return state+1;

      case 'DECREMENT':

      return state-1;

      default:

      return state;
  }
}




function Counter(){

  const [number, dispatch] = useReducer(sexreducer,0);




const onIncrease=()=>{

  dispatch({type:'INCREMENT'});

};


const onDecrease=()=>{

  dispatch({type:'DECREMENT'});
};




  return (

    <>

    <button onClick={onIncrease}>+1</button>
    {number}
    <button onClick={onDecrease}>-1</button>

    </>
  );
}

export default Counter;