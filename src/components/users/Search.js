import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = ({setAlert, searchUsers, clearUsers, showClear}) => {
    const [text, setText] = useState('')

    const onChange = (e) => setText(e.target.value)
    const onSubmit = (e) => {
        e.preventDefault();
        text === '' ? setAlert('Please enter something...', 'error') : searchUsers(text)
        setText('')
    }

    return (
        <div>
           <form className="form" onSubmit={onSubmit}>
               <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..." 
                    value={text}
                    onChange={onChange}
                />
               <input 
                    type="submit" 
                    value="Search"
                    className="btn btn-block btn-dark"
                />
            </form> 
            {showClear &&
                <button 
                    className="btn btn-light btn-block" 
                    onClick={clearUsers}>
                    Clear
                </button>
            }
        </div>
    )

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search