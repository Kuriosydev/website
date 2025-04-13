export default function StoreButton() {
    return (
        <div className="flex flex-col items-center justify-center my-4">
            <div className="flex flex-row flex-wrap items-center justify-center gap-8 md:gap-0">
                <div className="flex flex-col items-center">
                    <span className="font-bold text-xl md:text-3xl">App Store</span>
                </div>
                <div className="flex flex-col items-center md:ml-32 ml-0">
                    <span className="font-bold text-xl md:text-3xl">Google Play</span>
                </div>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center my-4 z-[1000] gap-8 md:gap-20">
                <a href="">
                    <div className="flex flex-col w-32 md:w-48">
                        <img src="/images/apple_store.png" alt="App Store iOS" className="w-full h-auto" />
                    </div>
                </a>
                <a href="">
                    <div className="flex flex-col w-32 md:w-48">
                        <img src="/images/play_store.png" alt="Google Play Store iOS" className="w-full h-auto" />
                    </div>
                </a>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center -mt-4 z-[1000] gap-8 md:gap-16 text-center">
                <div className="flex flex-col items-center">
                    <span className="font-medium text-[10px] md:text-base">Download for iPhone & iPad</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-medium text-[10px] md:text-base">Download for Android devices</span>
                </div>
            </div>
        </div>
    )
}
