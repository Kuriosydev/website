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
				<div className="absolute inset-0 z-10 mt-2 md:mt-0 flex flex-col justyfy-start items-start md:justify-center md:items-center text-white md:px-4 w-auto md:max-w-screen-l md:mx-auto">
					<h1 className="text-center text-4xl ml-[4.75rem] md:ml-0 sm:text-6xl md:text-[70px] leading-tight md:leading-[91px] px-18  tracking-wide md:tracking-[4px] font-luckiest font-bold text-white break-words capitalize">
						<span className="block">Meet Millie & Max!</span>
					</h1>
					<p className="mt-30 md:mt-4 font-semibold text-xs md:text-base md:leading-[22px] md:tracking-[0] text-black text-left md:text-center break-words pl-4 pr-30 md:px-96">
						Millie and Max are your fun-loving, brain-powered chimps guiding you through the Kurixel universe. They love solving puzzles, building crazy gadgets, and taking you on the ultimate learning adventure!
					</p>
					<div className="flex flex-row mt-2 md:mt-16 px-6">
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
		</section>
	)
}
