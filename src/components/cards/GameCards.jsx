import Link from "next/link";
import ImageButtons from "../buttons/ImageButtons";
import Heading from "../texts/Heading";
import VideoPreview from "../videos/VideoPreview";

export default function GameCards({ type, data, customDivClass = "flex flex-wrap items-center justify-center gap-12 mx-auto" }) {


    const renderScenario = () => {
        switch (type) {
            case 1:
                return (
                    <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap items-center justify-center gap-10 rounded-2xl">
                        {data.map((item, index) => (
                            <div key={index} className="max-w-xs bg-white border border-gray-100 rounded-lg shadow-xl dark:border-transparent">
                                <img className="rounded-t-lg p-2" src={item.imageSrc} alt={item.title} />
                                <div className="p-5">
                                    <h5 className="mb-2 text-lg font-bold tracking-tight">{item.title}</h5>
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
                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-start justify-center mx-auto gap-8">
                        {data.map((item, index) => (
                            <div key={index} className="h-full bg-transparent flex flex-col rounded-4xl text-xl items-center justify-center">
                                <img className="rounded-4xl md:w-52 lg:w-80 md:h-52 lg:h-80 object-cover" src={item.imageSrc} alt={item.title} />
                                <div className="p-5 flex-grow">
                                    <Heading
                                        text={item.title}
                                        fontFamily=""
                                        fontSize="text-xl md:text-xl lg:text-2xl xl:text-2xl"
                                        fontWeight="font-semibold"
                                        textAlign="text-left"
                                        letterSpacing="tracking-wide"
                                        textColor="text-black dark:text-white"
                                        customStyle="mb-2 items-center justify-center "
                                    />
                                    <p className="mb-3 font-medium text-left text-lg dark:text-white">{item.description}</p>
                                    <Link href={item.link}>
                                        <Heading
                                            text="View More"
                                            fontFamily="font-luckiest"
                                            fontSize="text-xl"
                                            fontWeight="font-normal"
                                            textAlign="text-left"
                                            letterSpacing="tracking-tight"
                                            textColor="text-black dark:text-white"
                                            customStyle="mb-2 "
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 4:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-start text-left rounded-2xl">
                        {data.map((item, index) => (
                            <div key={index} className="bg-white flex flex-col rounded-2xl">
                                <img className="rounded-t-lg p-2 w-full object-cover" src={item.imageSrc} alt={item.title} />
                                <div className="p-5 flex-grow">
                                    <Heading
                                        text={item.title}
                                        fontFamily="font-luckiest"
                                        fontSize="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl"
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
                                    <img className="rounded-t-lg p-2 w-full h-full object-contain" src={item.imageSrc} alt={`${item.title} image`} />
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
                    <div className={`${customDivClass} dark:text-white`}>
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