import React from 'react'
import AdmissionLists from '../Admission/AdmissionLists'
import AdmissionInfo from '../components/AdmissionInfo'

const Admission = () => {
    return (
        <div className="admission-container">
            <h1>Admission Open</h1>
            <div className="admission-info">
                <h2>Class</h2>
                <h2>Last Date To Apply</h2>
                <h2>Examination Date</h2>
                <h2>No. of Seats</h2>
                {AdmissionLists.map((AdmissionList) => {
                    return (
                        <AdmissionInfo
                            key={AdmissionList.id}
                            classes={AdmissionList.classes}
                            date={AdmissionList.date}
                            examDate={AdmissionList.examDate}
                            seat={AdmissionList.seat}
                        />
                    )
                })}
            </div>
            <button className="apply-btn"><h2>Click Here To Apply</h2></button>
        </div>
    )
}

export default Admission