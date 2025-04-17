import ImageButtons from "../buttons/ImageButtons";
import Heading from "../texts/Heading";
import VideoPreview from "../videos/VideoPreview";

export default function GameCards({ type, data, customDivClass = "flex flex-wrap items-center justify-center gap-12 mx-auto" }) {


    const renderScenario = () => {
        switch (type) {
            case 1:
                return (
                    <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap items-center justify-center gap-10">
                        {data.map((item, index) => (
                            <div key={index} className="max-w-xs bg-white border border-gray-100 rounded-lg shadow-xl">
                                <img className="rounded-t-lg p-2" src={item.imageSrc} alt={item.title} />
                                <div className="p-5">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight">{item.title}</h5>
                                    <p className="mb-3 font-medium text-lg">{item.description}</p>
                                    {item.buttonLink && (
                                        item.isImageButton
                                            ? (
                                                <ImageButtons
                                                    text="Create A Free Account"
                                                    source="/images/Group.png"
                                                    alt="Create A Free Account"
                                                    className="my-2 px-6 py-3 md:px-8 md:py-5"
                                                    textSize="text-base"
                                                />
                                            )
                                            : (
                                                <a href={item.buttonLink} className="font-luckiest text-black font-normal text-xl">
                                                    {item.buttonText}
                                                </a>
                                            )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 2:
                return (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {data.map((item, index) => (
                            <div key={index} className="max-w-xs bg-white border border-gray-100 rounded-lg shadow-xl">
                                <div className="p-5">
                                    <h5 className="mb-2 text-lg font-bold tracking-tight text-center">{item.title}</h5>
                                    <p className="font-medium text-sm text-gray-500 dark:text-gray-400 text-center">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 3:
                return (
                    <div className="flex gap-4">
                        {data.map((item, index) => (
                            <div key={index} className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-xl">
                                <div className="p-5">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight">{item.title}</h5>
                                    <p className="mb-3 font-medium text-lg">{item.description}</p>
                                    {item.buttonLink && (
                                        <div className="flex justify-end">
                                            <a href={item.buttonLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                                {item.buttonText}
                                                {/* You can add an icon here if needed */}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 4:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-start text-left">
                        {data.map((item, index) => (
                            <div key={index} className="bg-white flex flex-col">
                                <img className="rounded-t-lg p-2 w-full object-cover" src={item.imageSrc} alt={item.title} />
                                <div className="p-5 flex-grow">
                                    <Heading
                                        text="Learning made fun, in more ways than one"
                                        fontFamily="font-luckiest"
                                        fontSize="text-2xl md:text-5xl"
                                        fontWeight="font-normal"
                                        textAlign="text-left"
                                        letterSpacing="tracking-tight"
                                        textColor="text-[#8F0E00]"
                                        customStyle="mb-2"
                                    />
                                    <p className="mb-3 font-medium text-lg">{item.description}</p>
                                    {item.buttonText &&
                                        <ImageButtons
                                            text={item.buttonText}
                                            source={"/images/Group.png"}
                                            alt={item.buttonText}
                                            isLink={true}
                                            link={item.buttonLink}
                                            className="mt-8 md:mr-8 px-6 py-2 md:px-7 md:py-7"
                                        />
                                    }

                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'events':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((item, index) => (
                            <div key={index} className={`max-w-xs md:max-w-sm bg-white border border-gray-100 rounded-lg shadow-xl ${item.className || ''}`}>
                                <a href={item.link}>
                                    <img className="rounded-t-lg p-2 w-full h-full object-cover" src={item.imageSrc} alt={`${item.title} image`} />
                                </a>
                                <div className="p-5">
                                    <a href={item.link}>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight">{item.title}</h5>
                                    </a>
                                    <p className="mb-3 font-medium text-lg">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'video':
                return (
                    <div className={`${customDivClass}`}>
                        {data.map((item, index) => (
                            <div key={index} className="max-w-xs bg-transparent rounded-lg ">
                                <VideoPreview
                                    src={item.videoSrc}
                                    controls={false}
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    wrapperClass="w-full h-full rounded-xl"
                                />
                                {/* <img className="rounded-t-lg p-2" src={item.imageSrc} alt={item.title} /> */}
                                <div className="p-5">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight">{item.title}</h5>
                                    <p className="mb-3 font-medium text-lg">{item.description}</p>
                                    {item.buttonLink && (
                                        item.isImageButton
                                            ? (
                                                <ImageButtons
                                                    text="Create A Free Account"
                                                    source="/images/Group.png"
                                                    alt="Create A Free Account"
                                                    className="my-2 px-6 py-3 md:px-8 md:py-5"
                                                    textSize="text-base"
                                                />
                                            )
                                            : (
                                                <a href={item.buttonLink} className="font-luckiest text-black font-normal text-xl">
                                                    {item.buttonText}
                                                </a>
                                            )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return <p>Invalid Scenario</p>;
        }
    };

    return <>{renderScenario()}</>;
}