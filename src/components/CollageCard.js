import React from 'react'

const CollageCard = (props) => {
    return (
        <div className="collage-card">
            <img className="collage-img" src={props.pic} alt="img" />
            <h3>{props.occasion}</h3>
        </div>
    )
}

export default CollageCard