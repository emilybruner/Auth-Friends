import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriends = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    
    const addFriends = () => {
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => console.log(res))
        .catch(err => console.log('post error'. err.response))
    }

    const newFriend = {
        id: Date.now(),
        name: name,
        age: age,
        email: email
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleAgeChange = e => {
        setAge(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <form onSubmit={addFriends}>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={age}
                  onChange={handleAgeChange}
                  placeholder="Age"
                />
                <input
                  type="text"
                  value={name}
                  onChange={handleEmailChange}
                  placeholder="Email"
                />
                <button type="submit">Add Friend</button>

            </form>
        </div>
    )
        

}

export default AddFriends;