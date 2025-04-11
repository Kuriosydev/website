import ImageButtons from "../buttons/ImageButtons";
import Heading from "../texts/Heading";
import VideoPreview from "../videos/VideoPreview";

export default function ImageBanner({ col, bgColor }) {
  return (
    <section className={`w-full h-auto ${bgColor} relative z-0 overflow-hidden -mt-40`}>
      <div className="w-full min-h-auto md:min-h-[42.2rem] relative overflow-hidden pt-36 md:pt-44 pb-14 md:pb-20">
        {col === 1 &&
          <div className="flex flex-col w-full h-auto items-center justify-center">
            <div className="absolute top-0 md:-left-28 h-auto hidden md:block">
              <img src="/images/left_tree.png" alt="Left Tree Image" className="w-[80%] h-full object-cover" />
            </div>

            <div className="flex flex-col w-full h-auto items-center justify-center">
              <Heading
                text="When Learning Feels Like Play - Parents Make the Magic Real"
                fontFamily="font-luckiest"
                fontSize="text-5xl md:text-7xl"
                fontWeight="font-normal"
                textAlign="text-center"
                letterSpacing="md:tracking-wider"
                textColor="text-[#8F0E00]"
                customStyle="mt-10 px-24 md:px-80"
              />
              <div className="font-medium text-center text-base md:text-lg mt-10 px-8 md:px-0">
                Support your child as they discover a new learning journey with Kurixel.
              </div>
            </div>
          </div>
        }

        {col === 2 &&
          <div className="flex flex-col md:flex-row w-full h-auto items-center justify-center md:items-start md:justify-start">
            <div className="w-full md:w-2/3 full flex flex-col text-left text-xl px-9 md:pl-28">
              <div className="absolute top-0 md:-left-28 h-auto hidden md:block">
                <img src="/images/left_tree.png" alt="Left Tree Image" className="w-[80%] h-full object-cover" />
              </div>
              <Heading
                text="Make math an exciting adventure"
                fontFamily="font-luckiest"
                fontSize="text-5xl md:text-7xl"
                fontWeight="font-normal"
                textAlign="text-center md:text-left"
                letterSpacing="md:tracking-wider"
                textColor="text-[#8F0E00]"
                customStyle="mt-10"
              />
              <div className="font-medium text-center md:text-left text-base md:text-lg mt-10 md:px-0">
                Adaptive math practice meets engaging game-based learning with Kurixel Math. As students explore an exciting fantasy world, parents and teachers can support their learning and make it more effective than ever.
              </div>
              <div className="flex flex-col md:flex-row items-center justify-start mt-8 md:mt-14">
                <ImageButtons
                  text="Teachers, sign up now"
                  source="/images/Group.png"
                  alt="Teachers, sign up now Background"
                  className=' md:mr-12 px-6 py-2 md:px-8 md:py-5'
                />
                <ImageButtons
                  text="Parents, sign up now"
                  source="/images/Group.png"
                  alt="Parents, sign up now Background"
                  className=' mt-6 md:mt-0 md:mr-12 px-6 py-2 md:px-8 md:py-5'
                />
              </div>
            </div>
            <div className="w-full md:w-2/4 flex flex-col text-center md:text-left text-xl ml-0 md:ml-16 pl-6 md:px-0 mt-12 md:mt-0">
              <VideoPreview
                src="/videos/news_banner_vid_2.mp4"
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
                wrapperClass="w-auto md:w-[150%] h-full pr-8 md:pr-0 rounded-2xl" // Custom height, full width
              />

            </div>
          </div>
        }
      </div>
    </section>
  )
}
