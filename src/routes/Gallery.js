import React from 'react'
import CollageInfo from '../Gallery/CollageInfo'
import CollageCard from '../components/CollageCard'

const Gallery = () => {
    return (
        <div className="gallery-container">
            <h2 className="gallery-heading">Gurukul Collage</h2>
            <div className="collage-container">
                {CollageInfo.map((collage) => {
                    return (
                        <CollageCard
                            key={collage.id}
                            pic={collage.pic}
                            occasion={collage.occasion}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery