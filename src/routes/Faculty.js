import React from 'react'
import FacultyLists from '../Faculty/FacultyLists'
import FacultyInfo from '../components/FacultyInfo'

const Faculty = () => {
    return (
        <div className="faculty-container">
            <h2>Faculty : Student : : 1 : 9</h2>
            <div className="faculty-info">
                <h3>S.no</h3>
                <h3>Designation</h3>
                <h3>Name</h3>
                {FacultyLists.map((FacultyList) => {
                    return (
                        <FacultyInfo
                            key={FacultyList.id.toString()}
                            sno={FacultyList.id}
                            name={FacultyList.name}
                            design={FacultyList.designation}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Faculty