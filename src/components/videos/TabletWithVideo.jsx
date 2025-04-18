import Image from 'next/image';
import VideoPreview from './VideoPreview';

export default function TabletWithVideo() {
    return (
        <div className="relative w-[500px] h-[400px]">
            {/* VideoPreview below the tablet frame */}
            <div className="absolute top-[11%] left-[6.5%] w-[87%] h-[78%] z-10 overflow-hidden rounded-xl">
                <VideoPreview
                    src="/videos/preview.mp4"
                    controls={false}
                    autoPlay
                    muted
                    loop
                    wrapperClass=""
                />
            </div>

            {/* Tablet image on top */}
            <Image
                src="/images/2149554978 1.png"
                alt="Tablet Frame"
                fill
                className="z-0 object-contain pointer-events-none"
                priority
            />
        </div>
    );
}
