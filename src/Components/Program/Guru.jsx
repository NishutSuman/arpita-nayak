import React, { useEffect, useState } from "react";

function Guru({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) {
	const [curr, setCurr] = useState(0);

	// const prev = () =>
	// 	setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	});
	return (
		<div>
			<div>
				<h3 className="font-bold text-2xl text-red-700 bg-red-300 rounded-lg w-[98%] mx-auto p-4 mt-10">
					{" "}
					Guru Smt. Vimmi B. Eswar and Guru Ms. Chithra Rajan
				</h3>

				<h4 className="mt-4 font-f1 font-bold sm:text-2xl text-amber-500">
					" akhaṇḍamaṇḍalākāraṁ vyāptaṁ yena carācaram <br />
					tatpadaṁ darśitaṁ yena tasmai śrīgurave namaḥ "
				</h4>
				<div className="sm:flex-row flex flex-col-reverse gap-10 mt-10 justify-center w-full">
					<div className="sm:w-[60%] font-f1 px-2">
						<h4>
							<span className="sm:text-2xl text-2xl text-orange-600">
								Guru Vimmi B Eswar,{" "}
							</span>
							cofounder of AntarA institutions is a Guru par excellence, an
							ardent Kuchipudi performer and an exponent of both Kuchipudi and
							Bharatanatyam. A passionate seeker of arts, she is skilled in
							Carnatic vocal and veena to her credit. She advocates Indian
							culture and heritage through traditional arts and dance. She
							contributes to the Arts society with her choreography and
							repertoires to the art connoisseurs across the Indian
							subcontinent, Far East, Middle East and Europe. Envisioning a
							curriculum-based education with collaborative approach and not
							through competition, for that it promotes peace, she cofounded
							AntarA institutions.
							<br />
							<br />
							A double master of Arts (Kuchipudi and Bharatanatyam), she
							believes that we are yet to experience the original and preserved
							beauty of our Bhartiya ancient art forms that is always ahead of
							times. Continuing her research on dance forms, she strongly
							believes uniqueness of natural beauty in every art form and so is
							the beauty of every artist, for the art varies across time,
							motivation, aspiration, and principle. Further to her gradation
							under Doordarshan, she is certified in Kuchipudi and Nattuvangam.
							<br />
							<br />
                            <span className="sm:text-2xl text-2xl text-orange-600">
                            Guru Ms. Chithra Rajan{" "}
							</span>
							 is a Bharatanatyam faculty member at Antara
							Institutions. She is a second rank holder of Masters in
							Bharatanatyam from RLV College, Tripunithura, under Mahatma Gandhi
							University, Kerala. A first rank holder of Bachelor's degree in
							Bharatanatyam, she has also pursued her Bachelor's degree in
							Business Administration from Annamalai University.
                            <br/>
                            <br/>
                            Performing on
							stage since the age of 5, she completed her arangetram at the
							tender age of 9 and continued her formal training in
							Bharatanatyam. She also learned Mohiniyattam and Kuchipudi under
							renowned gurus to follow her passion for dance, alongside
							participating in and winning several prizes and youth festivals
							and university exams. Ms. Chithra was a dance teacher for 2 years
							at Bharatiya Vidhya Bhavan and Holy Grace Academy prior to joining
							Antara Institute of Performing Arts Dubai in the year 2019. She
							has attended the all-India conference on Music-Naatya in 2012 and
							2013 and various art workshops, and functioned as a coordinator
							for the Guinness World Record of Mohiniyattam, visualizing
							Daivadasakam dance performed by 1,500 dancers, held in
							Kodungallur in 2018.
						</h4>
					</div>
					{/* Carousel */}
					<div className="overflow-hidden relative sm:w-[30%] ">
						<div
							className="flex transition-transform ease-out duration-500 "
							style={{ transform: `translateX(-${curr * 100}%)` }}
						>
							{slides}
						</div>
						{/* <div className="absolute inset-0 flex items-center justify-between p-4">
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
					</div> */}

						<div className="absolute bottom-4 right-0 left-0">
							<div className="flex items-center justify-center gap-2">
								{slides.map((_, i) => (
									<div
										className={`
                    transition-all w-3 h-3 bg-white rounded-full
                    ${curr === i ? "p-2" : "bg-opacity-50"}
                  `}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Guru;
