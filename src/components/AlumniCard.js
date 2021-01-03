import React from 'react'

const AlumniCard = (props) => {
    return (
        <div className="alumni-card">
            <img className="alumni-img" src={props.pic} alt="img" />
            <p>Name : {props.name}</p>
            <p>Job : {props.job}</p>
        </div>
    )
}

export default AlumniCard