import ImageButtons from '@/components/buttons/ImageButtons';

const playIcon = 'fa-solid fa-play';
const downloadIcon = 'fa-solid fa-arrow-down';

export default function Banner() {
  return (
    <section className="w-auto h-auto">
      <div className="w-full min-h-screen relative overflow-hidden -mt-[60px] pt-[80px]">
        <img
          src="/images/frame_177_1.png"
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover object-left md:object-center -z-10"
        />

        {/* Optional overlay */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/40 sm:bg-transparent" />

        {/* Centered content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center px-4 w-full max-w-screen-xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-[87px] leading-tight md:leading-[91px] tracking-wide md:tracking-[0.25rem] font-luckiest font-bold text-white sm:text-[#8A4616] break-words text-center capitalize">
            <span className="block">WHERE LEARNING IS</span>
            <span className="block">AN ADVENTURE!</span>
          </h1>

          <p className="mt-4 font-medium text-[18px] leading-[22px] tracking-[0] text-white sm:text-black text-center break-keep">
            Where play meets adventure. Learn, explore, and level up in the coolest way possible!
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <ImageButtons
              text="Play Now"
              source={"/images/Group.png"}
              alt="Play Now Background"
              icon={playIcon}
              className="md:mr-8 px-6 py-2 md:px-8 md:py-5"
            />
            <ImageButtons
              text="Download"
              source={"/images/Group.png"}
              alt="Download Background"
              icon={downloadIcon}
              className="mt-4 md:mt-0 px-6 py-2 md:px-8 md:py-5"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full absolute -mt-24 sm:-mt-24 md:-mt-64 lg:-mt-80 z-10">
        <div className="flex flex-col">
          <img
            src="/images/1d92109b6ffb112d0c8a513fc366f499.png"
            alt="Left Side Top Bush"
            className="h-40 md:h-60 sm:h-20 w-auto -mt-36 sm:-mt-36 md:mt-0 lg:mt-0"
          />
          <img
            src="/images/gnttt_4.png"
            alt="Left Side Bottom Bush"
            className="h-40 md:h-60 sm:h-20 w-auto"
          />
        </div>
        <div className="flex flex-col items-end mt-24 sm:mt-24 md:mt-0 lg:mt-0">
          <img
            src="/images/gnttt_5.png"
            alt="Right Side Top Bush"
            className="h-40 md:h-60 sm:h-20 w-auto"
          />
          <img
            src="/images/gnttt_6.png"
            alt="Right Side Bottom Bush"
            className="h-40 md:h-60 sm:h-20 w-auto"
          />
        </div>
      </div>
    </section>
  )
}
