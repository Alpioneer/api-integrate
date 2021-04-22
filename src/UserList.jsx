import React from 'react';


function User({user,onRemove,onToggle}){

  return(

    <div>

      <b onClick={()=>onToggle(user.id)} style={{

        cursor:'pointer',
        color:user.active ? 'green' : 'red'

      }}> {user.username}</b>
     
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={()=>{onRemove(user.id)}}>삭제</button>

    </div>
  )

  
}

function UserList({users,onRemove,onToggle}) {


  
  return (
    
<>
   {users.map((user,index)=>(<User user={user} key={index} onRemove={onRemove} onToggle={onToggle}/>))}
</>
  );

}

export default UserList;