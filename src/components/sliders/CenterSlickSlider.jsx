import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function CenterSlickSlider({ sliderRef }) {
   const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "20%",
      slidesToShow: 1,
      speed: 500,
      arrows: false,
   };

   const images = [
      "/images/gamplay_screenshot1.png",
      "/images/gamplay_screenshot2.png",
      "/images/gamplay_screenshot3.png",
   ];

   return (
      <div className="w-full md:w-[110%] h-full z-50">
         <Slider ref={sliderRef} {...settings}>
            {images.map((src, idx) => (
               <div key={idx} className="px-2 group">
                  <div className="relative h-64 md:h-[31.75rem] w-full overflow-hidden rounded-xl border-8 border-white transition-all duration-300 slick-slide-inner">
                     <Image
                        src={src}
                        alt={`Screenshot ${idx + 1}`}
                        fill
                        className="object-fill"
                     />
                     <div className="absolute inset-0 bg-white/50 opacity-100 transition-opacity duration-300 pointer-events-none overlay" />
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   );
}
