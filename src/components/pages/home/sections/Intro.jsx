import ImageButtons from "@/components/buttons/ImageButtons";
const playIcon = 'fa-solid fa-play';


export default function Intro() {
	return (
		<section className="w-full h-auto">
			<div className="w-full min-h-96 relative overflow-hidden ">
				<img
					src="/images/ca0ad6cbee22479a434887931d2b542c_bg.png"
					alt="Millie & Max Background"
					className="absolute top-0 left-0 w-full h-full object-cover object-left md:object-center -z-10 opacity-90 bg-[rgba(255,206,73,0.5)]"
				/>

				{/* Optional overlay */}
				<div className="absolute top-0 left-0 w-full h-full pointer-events-none md:bg-transparent bg-[rgba(100,100,100,0.1)]" />

				{/* Centered content */}
				<div className="relative w-full overflow-hidden aspect-[3/4] sm:aspect-[9/16] md:aspect-[4/3] lg:aspect-[16/9]">
					<div className="absolute inset-0 z-10 mt-2 md:mt-0 flex flex-col justify-start items-start md:justify-center md:items-center text-white px-4 sm:px-6 md:px-4 w-full max-w-screen-xl mx-auto">
						<h1 className="text-center text-3xl sm:text-4xl md:text-[70px] leading-tight md:leading-[91px] tracking-wide md:tracking-[4px] font-luckiest font-bold text-white break-words capitalize ml-32 sm:ml-16 md:ml-0">
							<span className="block">Meet Millie & Max!</span>
						</h1>

						<p className="mt-36 sm:mt-8 md:mt-4 font-semibold text-xs sm:text-sm md:text-base md:leading-[22px] text-black text-left sm:text-center break-words pr-24 sm:px-10 md:px-48 lg:px-60 xl:px-72">
							Millie and Max are your fun-loving, brain-powered chimps guiding you through the Kurixel universe. They love solving puzzles, building crazy gadgets, and taking you on the ultimate learning adventure!
						</p>

						<div className="flex flex-row mt-4 sm:mt-6 md:mt-16 px-4 sm:px-8">
							<ImageButtons
								text="Play Now"
								source="/images/Group.png"
								alt="Play Now Background"
								icon={playIcon}
								className="md:mr-8 px-6 py-2 md:px-8 md:py-5"
							/>
						</div>
					</div>
				</div>



			</div>
		</section>
	)
}
