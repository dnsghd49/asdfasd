// GalleryItem.js
import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }

    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div>
                <h2>"{props.data.trackName}"</h2>
                <h3>
                    <Link to={`/artist/${props.data.artistId}`}>
                        {props.data.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.data.collectionId}`}>
                        {props.data.collectionName}
                    </Link>
                </h3>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
            style={{ 'display': 'inline-block' }}>
            {view ? detailView() : simpleView()}
        </div>
    )

}
export default GalleryItem