import React, { useRef,useState } from 'react';
import CreateUser from './CreateUser'
import UserList from './UserList';

function App() {



  const [inputs,setInputs] =useState({

      username:'',
      email:'',
      active:true
  })


const {username,email,active} = inputs;


  const onChange= e =>{

    const {name,value}= e.target;

  
    setInputs({

      ...inputs,

      [name]:value

     

    })


  }

  const [users,setUsers] = useState([

    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active:true
    },

    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active:true
      
    },

    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active:true
    }

  ])


  const nextId = useRef(4);

  const onCreate = () => {

    const user={

      id:nextId.current,
      username,
      email,
      active

    };


    setUsers([...users,user]);

    setInputs({
      username:'',
      email:'',
      active:true
    })

    nextId.current += 1;


  };

  const onRemove = id =>{

   

    setUsers(users.filter((user) => {
      console.log('user>>', user)
      if(user.id !== id){
        return user;
      }
    }))


  }


  const onToggle=id=>{

    setUsers(

      users.map(item => item.id ===id?
        
        {
        ...item, 
        active:!item.active

      }

      : item
       
      )
    )
  }





  // users.filter(x =>{ x.id !== id`})


  return (
  <>

  <CreateUser username={username}
  email={email}
  onChange={onChange}
  onCreate={onCreate}/>
  <UserList users={users} onRemove={onRemove} onToggle={onToggle} />;

  <button onClick={()=>{console.log("삭제 후 =>",users)}}/>


  </>
  
    )}

export default App;