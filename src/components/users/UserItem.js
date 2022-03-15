import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const UserItem = ({user}) => {

    const {avatar_url, login} = user;
        return (
            <div className="card text-center flex-item m-1">
                <img src={avatar_url} className="round-img" style={{width: '90px'}} alt=""/>
                <h3>{login}</h3>
                <Link to={`/user/${login}`} className="btn btn-dark my-1">More</Link>  
            </div>
        )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
