
export default function StoreButton() {
    return (
        <div className="flex flex-col items-center justify-center my-4">
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-center">
                    <span className="font-bold text-xl md:text-3xl">App Store</span>
                </div>
                <div className="flex flex-col items-center ml-28 md:ml-32">
                    <span className="font-bold text-xl md:text-3xl">Google Play</span>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center my-4 z-[1000]">
                <a href="">
                    <div className="flex flex-col">
                        <img src="/images/apple_store.png" alt="App Store iOS" className="w-full h-full" />
                    </div>
                </a>
                <a href="">
                    <div className="flex flex-col ml-20">
                        <img src="/images/play_store.png" alt="Google Play Store iOS" className="w-full h-full" />
                    </div>
                </a>
            </div>
            <div className="flex flex-row items-center justify-center -mt-4 z-[1000]">
                <div className="flex flex-col items-center">
                    <span className="font-medium text-[10px] md:text-base">Download for iPhone & iPad</span>
                </div>
                <div className="flex flex-col items-center ml-12 md:ml-16">
                    <span className="font-medium text-[10px] md:text-base">Download for Android devices</span>
                </div>
            </div>
        </div>
    )
}
