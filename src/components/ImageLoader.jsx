import React, {useState} from 'react';

const ImageLoader = ({src, alt, style}) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <Loader/>}
            <img
                src={src}
                alt={alt}
                onLoad={() => {
                    setLoading(false)
                }}
                style={{display: loading ? "none" : "block", ...style}}
            />
        </>
    );
};

const Loader = () => {
    return (
        <div className={"loader"}>
            <div className="spinner"></div>
        </div>
    )
}

export default ImageLoader;
