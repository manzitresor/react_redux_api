import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Users() {
    const {users,isLoading,error} = useSelector((state)=>state.users);
    const [Loading,setLoading] = useState(isLoading);
    const [isError,setIsError] = useState(error);

    if(Loading === true) {
        return(
            <>
            <h1>Loading....</h1>
            </>
        )
    }
    if(isError ) {
        return(
            <>
            <h1>{isError}</h1>
            </>
        )
    }
  return (
    <>
        {users.map((user)=>(
             <ul key={user.id}>
                <li>{user.firstName}</li>
                <li>{user.secondName}</li>
            </ul>
        ))}
    </>
  )
}

export default Users
