import React, {useState,useEffect} from 'react';
import axios from 'axios';


const Users=()=>{


    const [users,setUsers]=useState(null);
    const [loading, setloading] =useState(false);
    const [error,setError] = useState(null);


    useEffect(()=>{

        const fetchUsers = async()=>{

            try{

                //요청이 시작 할 때에는 error와 users를 초기화,

                setError(null);
                setUsers(null);

                //loading 상태를 true로 바꿈

                setloading(true);

                const response = await axios.get(

                    'https://jsonplaceholder.typicode.com/users'

                );


                setUsers(response.data);


            }  catch(e){

                setError(e);
            }

            setloading(false);
         };


         fetchUsers();

    }, []);


    if(loading) return <div>로딩중..로딩중..로딩중..로딩중..로딩중..로딩중..로딩중..로딩중..로딩중..로딩중..로딩중..로딩중..로딩중..로딩중..</div>;
    if(error) return <div>에러가 발생했습니다</div>;
    if(!users) return null;


    return(
    
    <ul>

    {users.map(user => (<li key={user.id}>{user.username} ({user.name}) </li>))}

    </ul>
    )


}

export default Users;