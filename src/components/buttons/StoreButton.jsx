export default function StoreButton() {
    return (
        <div className="flex flex-col items-center justify-center my-4">
            <div className="flex flex-row flex-wrap items-center justify-center my-4 z-[1000] gap-4 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-20">
                <a href="">
                    <div className="flex flex-col w-32 sm:w-40 md:w-48 lg:w-44 xl:w-64">
                        <img src="/images/apple_store.png" alt="App Store iOS" className="w-full h-auto" />
                    </div>
                </a>
                <a href="">
                    <div className="flex flex-col w-32 sm:w-40 md:w-48 lg:w-44 xl:w-64">
                        <img src="/images/play_store.png" alt="Google Play Store iOS" className="w-full h-auto" />
                    </div>
                </a>
            </div>
        </div>
    )
}
