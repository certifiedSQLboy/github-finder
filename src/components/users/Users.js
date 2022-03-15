import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner'


const Users = ({users, loading}) => {
        
    return (
        
        <div className="flex">
            {loading ? 
                <Spinner/> : 
                users.map(user => <UserItem user={user} key={user.id}/>)
            }
        </div>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users
