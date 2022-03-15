import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({alert}) => {
return (
    alert !== null && 
            <div className={`alert alert-${alert.type}`} style={{position: 'relative'}}>
                <i className="fas fa-info-circle"></i>  {alert.msg}
            </div>
)
}

Alert.protoTypes = {
    alert: PropTypes.object
}

export default Alert
