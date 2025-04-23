import ImageButtons from "@/components/buttons/ImageButtons";
const playIcon = 'fa-solid fa-play';


export default function Intro() {
	return (
		<section className="w-full h-auto">
			<div className="flex flex-row justify-between w-full absolute -mt-30 sm:-mt-30 md:-mt-[11.25rem] lg:-mt-48 z-10">
				<div className="flex flex-col -ml-6 md:ml-0 aspect-auto mt-0 sm:mt-0 md:mt-10 lg:mt-20">
					<img
						src="/images/millie.png"
						alt="Millie"
						className="h-auto w-[100%] sm:w-[65%] md:w-[65%] lg:w-[84%] aspect-auto"
					/>

				</div>
				<div className="flex flex-col items-end mr-0 md:mr-2 mt-64 md:mt-[9.4rem] aspect-[3/4]">
					<img
						src="/images/max.png"
						alt="Max"
						className="h-auto w-[100%] sm:w-[50%] md:w-[70%] lg:w-[98%] aspect-auto"
					/>

				</div>
			</div>
			<div className="w-full max-h-[30rem] sm:max-h-96 md:max-h-96 lg:max-h-96 relative overflow-hidden ">
				<img
					src="/images/ca0ad6cbee22479a434887931d2b542c_bg.png"
					alt="Millie & Max Background"
					className="absolute top-0 left-0 w-full h-full object-cover object-left md:object-center -z-10 opacity-90 bg-[rgba(255,206,73,0.5)] dark:bg-[rgba(0,0,0,0.5)] dark:opacity-60"
				/>

				{/* Optional overlay */}
				<div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/10  dark:bg-black/70" />

				{/* Centered content */}
				<div className="relative w-full items-center justify-center overflow-hidden aspect-[3/4] sm:aspect-[9/16] md:aspect-[4/3] lg:aspect-[16/9]">
					<div className="inset-0 z-10 mt-4 md:mt-6 lg:mt-8 flex flex-col justify-center items-center md:justify-center md:items-center text-white px-4 sm:px-6 md:px-4 w-full max-w-[32rem] sm:max-w-[32rem] md:max-w-[20rem] lg:max-w-[30rem] xl:max-w-[40rem] mx-auto">
						<h1 className="text-center text-3xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-12 lg:leading-14 tracking-wide md:tracking-[4px] font-luckiest font-bold text-white break-words capitalize ml-32 sm:ml-16 md:ml-0">
							<span className="block">Meet Millie & Max!</span>
						</h1>

						<p className="mt-32 sm:mt-8 md:mt-4 font-semibold text-xs sm:text-sm md:text-base md:leading-[22px] text-black dark:text-white text-left sm:text-center break-words pl-8 pr-30 sm:px-0 md:px-0 lg:px-0 xl:px-0">
							Millie and Max are your fun-loving, brain-powered chimps guiding you through the Kurixel universe. They love solving puzzles, building crazy gadgets, and taking you on the ultimate learning adventure!
						</p>

						<div className="flex flex-row -ml-32 sm:-ml-0 md:-ml-0 lg:-ml-0 xl:-ml-0 mt-4 sm:mt-4 md:mt-2 lg:mt-8">
							<ImageButtons
								text="Play Now"
								source="/images/Group.png"
								alt="Play Now Background"
								icon={playIcon}
								className="px-6 py-2 md:px-8 md:py-5"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
