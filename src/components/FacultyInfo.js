import React from 'react'

const FacultyInfo = (props) => {
    return (
        <>
            <p className="faculty-design">{props.sno}</p>
            <p className="faculty-design">{props.design}</p>
            <p className="faculty-design">{props.name}</p>
        </>
    )
}

export default FacultyInfo