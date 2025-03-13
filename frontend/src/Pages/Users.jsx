import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [User, setUser] = useState([]);

    const handleUser = async () => {
        const Response = await axios.get('http://localhost:1300/');
        const data = Response.data;
        //    console.log(data);
        setUser(data);
    }

    console.log(User);
    useEffect(() => {
        handleUser();
    }, [])
    return (
        <div>
            {
                User.map((items, index) => {
                    return (
                        <ul key={index}>
                            <li>{items.name}</li>
                            <li>{items.email}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Users
