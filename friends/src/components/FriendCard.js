import React from 'react'

const FriendCard = ({name, age, email}) => {
    return (
        <div>
            <h4>name: {name}</h4>
            <p>age: {age}</p>
            <p>email: {email}</p>
        </div>
    )
}

export default FriendCard;