// Gallery.js
import GallItem from './GallItem'

function Gallery(props) {
    const display = props.data.map((item, index) => {
        return (
            <GallItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery