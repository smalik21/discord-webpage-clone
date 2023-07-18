import { useEffect } from "react"

function Section({ imageFirst, image, title, content, color }) {

    return (
        <div className={`Section ${color}`}>
            {imageFirst ? (
                <div className="container">
                    <img className="image" src={image} />
                    <div className="details">
                        <h1 className="title">{title}</h1>
                        <p className="content">{content}</p>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="details">
                        <h1 className="title">{title}</h1>
                        <p className="content">{content}</p>
                    </div>
                    <img className="image" src={image} />
                </div>
            )}
        </div>
    )
}

export default Section