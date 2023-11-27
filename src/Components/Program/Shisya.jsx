import React, { useEffect, useState } from "react";

function Shisya({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
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
				<h3 className="font-bold text-2xl text-green-700 bg-green-300 rounded-lg w-[98%] mx-auto p-4 mt-10">
					{" "}
					Shisya: Arpita Nayak{" "}
				</h3>
				<div className="sm:flex-row flex flex-col-reverse gap-10 mt-10 justify-center w-full">
					<div className="sm:w-[60%] font-f1 px-2">
						<h4>
							<span className="sm:text-2xl text-2xl text-orange-600">
								Arpita,
							</span>{" "}
							a fervent and enthusiastic learner from Kanheipur, Ganjam,
							Odisha, India, has been dedicated to the classical art of
							Bharatanatyam for the past eight years. Her journey in this art
							form began at the age of 9 under the guidance of Guru Smt.
							Subathra Sudarshan in Atlanta. Over the years, she actively
							participated in various temple events in Atlanta and took part in
							numerous recitals, showcasing her passion and dedication. Some
							includes:
							<br/> 
							<br />
							• Performances at IACA, Hindu Temple, Atlanta, USA on the occasion
							of New Temple premise Inauguration
							<br />
							• Performances at Siva Mandir of Atlanta, USA on the
							occasion of Sita Vivah 
							<br/> 
							• She has also performed in a kuchipudi
							ballet (Navadurga), with renowned kuchipudi artist Dr. Haleem Khan
							(is an Indian Kuchipudi dancer, performer and movie actor). 
							<br/> <br/> 
							In
							2020, when Arpita relocated to Dubai, she continued her
							Bharatanatyam training at Antara Institute of Performing Arts
							under the tutelage of Guru Smt. Vimmi B. Eswar and Guru Ms.
							Chithra Rajan. She also had the privilege of performing at
							prestigious events organized by Antara Institutions, including: 
							<br/> <br/> 
							•
							Expo 2020 hosted by ISKCON Dubai 
							<br/> • Prakurthi Dhwani 2022's "Loka
							Nyasam," which is the annual flagship event of Antara Institutions
							<br/> • Performed in the Independence Day program organized by Indian
							diaspora of Dubai 
							<br/> <br/> Simultaneously, Arpita remained actively engaged
							in various extracurricular activities and academic pursuits as an
							IB student at GEMS Dubai American Academy. She not only excelled
							in her classes but also challenged herself by enrolling in
							advanced courses. In addition to her academic achievements, Arpita
							diligently completed the grades in the Tamil University
							examinations, which are conducted annually. 
							<br/> <br/> Arpita's commitment
							extended beyond her academic and artistic pursuits. She served as
							a Student Ambassador at her school, held the position of President
							in the math honor society, and was an active member of the
							National Honor Society. Furthermore, she enthusiastically
							participated in various school sports and activities, such as
							Academic Games and Softball. Arpita also made a significant impact
							on her local community through her volunteer work, both within and
							outside the school, by serving as a peer tutor and volunteering at
							the Al Jalila Children's Hospital. 
							<br/> <br/> Despite the multiple
							relocations she has experienced in her life, Arpita remains
							resolute in her dedication to Bharatanatyam. She aspires to
							continue her pursuit of this art form even after her school years
							and into university. Her ultimate goal is to inspire younger
							generations to reconnect with their cultural heritage and embrace
							the enriching experiences and opportunities that classical art
							forms like Bharatnatyam oBharatanatyamlives.
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

export default Shisya;
