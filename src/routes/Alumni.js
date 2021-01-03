import React from 'react'
import AlumniLists from '../Alumni/AlumniLists'
import AlumniCard from '../components/AlumniCard'

const Alumni = () => {
    return (
        <div className="alumni-container">
            {AlumniLists.map((AlumniList) => {
                return (
                    <AlumniCard
                        key={AlumniList.id}
                        pic={AlumniList.pic}
                        name={AlumniList.name}
                        job={AlumniList.job}
                    />
                )
            })}
        </div>
    )
}

export default Alumni