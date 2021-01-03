import React from 'react'

const AdmissionInfo = (props) => {
    return (
        <>
            <p className="info">{props.classes}</p>
            <p className="info">{props.date}</p>
            <p className="info">{props.examDate}</p>
            <p className="info">{props.seat}</p>
        </>
    )
}

export default AdmissionInfo