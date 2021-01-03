import React from 'react'

const NewsCard = (props) => {
    return (
        <>
            <h2>{props.heading}</h2>
            <h3>{props.date}</h3>
            <p>{props.news}</p>
        </>
    )
}

export default NewsCard