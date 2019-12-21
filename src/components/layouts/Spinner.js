import React, {Fragment} from 'react'

const Spinner = () => {
    return (
        <Fragment>
            <div  alt="Loading..." style={{ width: "200px", margin: "block", display: 'block'}} >
                <i className="fas fa-spinner"></i>
            </div>
        </Fragment>
    )
}

export default Spinner
