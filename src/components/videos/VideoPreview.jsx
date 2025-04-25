export default function VideoPreview({
    src,
    controls = true,
    autoPlay = true,
    muted = true,
    loop = true,
    wrapperClass = 'w-full h-full',
    position = "object-cover",
    videoWidth = 'w-full',
    videoHeight = 'h-full'
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
                playsInline
                {...{ 'webkit-playsinline': 'true' }}
                className={`${videoWidth} ${videoHeight} ${position}`}
            />
        </div>
    );
}
