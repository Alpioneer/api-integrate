import React ,{useState} from 'react';

function InputSample() {

    const [inputs,setInputs] =useState({

        name:'',
        nickname:''

    })


    const {name,nickname} =inputs;


    const [text, setText] =useState('');


    const onChange = (e) =>{

        const {value,name}= e.target;

    }
    


    const onReset = ()=>{
    }


  return (

    <div>
    <input placeholder="이름" />
    <input placeholder="닉네임" />
    <button onClick={onReset}>초기화</button>
    <div>
      <b>값: </b>
      이름 (닉네임)
    </div>
  </div>
  );
}

export default InputSample;