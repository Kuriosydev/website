'use client';


export default function ImagePreview({
    src,
    wrapperClass = 'w-full h-full',
    position = "object-cover",
    imageWidth = 'w-full',
    imageHeight = 'h-full'
}) {
    if (!src) return null;

    return (
        <div className={`${wrapperClass} overflow-hidden bg-transparent`}>
            <img
                src={src}
                className={`${imageWidth} ${imageHeight} ${position}`}
            />
        </div>
    );
}
