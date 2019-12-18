import React, {useEffect, useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriends from './AddFriends';
import FriendCard from './FriendCard';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err.response))
    }, [])

    return (
        <div>
            <AddFriends />
            <div>
                {friends.map(friend => (
                    <FriendCard key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                ))}
            </div>
        </div>
    )
}

export default Friends;