import React, {Fragment } from 'react'
import spinner from './spinner.gif';

const Spinner = () => {

    return <Fragment>
    <img 
        src={spinner} 
        className='text-center' 
        style={{width: '250px'}} 
        alt="Loading..."
    />
</Fragment>
}

export default Spinner
