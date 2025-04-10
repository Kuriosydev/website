'use client';


export default function VideoPreview({
    src,
    controls = true,
    autoPlay = true,
    muted = true,
    loop = true,
    wrapperClass = 'w-full h-full', // Default to full dimensions
}) {
    if (!src) return null;

    return (
        <div className={`${wrapperClass} overflow-hidden bg-transparent`}>
            <video
                src={src}
                controls={controls}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
