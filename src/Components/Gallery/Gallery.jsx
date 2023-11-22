import React, { useEffect, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

function Gallery({
	children: slides,
	autoSlide = true,
	autoSlideInterval = 3000,
}) {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 3 ? slides.length - 0 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === slides.length - 3 ? 0 : curr + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	});
	return (
		<div name="gallery" className="my-20 mx-4 gallery">
            <h2 className="font-f2 text-orange-600 sm:text-4xl text-2xl font-bold pb-10">
				—•— GALLERY —•—
			</h2>
			<div className="overflow-hidden relative sm:w-[90%] mt-[2%] mx-auto  h-[30rem]">
				<div
					className="flex transition-transform ease-out duration-50 sm:translate-x-[-100%] sm:w-full w-full items-center sm:h-[100%] sm:gap-10"
					style={{ transform: `translateX(-${curr * 100}%)` }}
				>
					{slides}
				</div>
				<div className="absolute inset-0 flex items-center justify-between p-4">
					<button
						onClick={prev}
						className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
					>
						<FaCircleChevronLeft size={40} />
					</button>
					<button
						onClick={next}
						className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
					>
						<FaCircleChevronRight size={40} />
					</button>
				</div>

				{/* <div className="absolute bottom-4 right-0 left-0">
					<div className="flex items-center justify-center gap-2">
						{slides.map((_, i) => (
							<div
								className={`transition-all w-3 h-3 bg-orange-600 rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}
							/>
						))}
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default Gallery;
