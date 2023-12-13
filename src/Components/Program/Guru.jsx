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
							is a Bharatanatyam faculty member at Antara Institutions. She is a
							second rank holder of Masters in Bharatanatyam from RLV College,
							Tripunithura, under Mahatma Gandhi University, Kerala. A first
							rank holder of Bachelor's degree in Bharatanatyam, she has also
							pursued her Bachelor's degree in Business Administration from
							Annamalai University.
							<br />
							<br />
							Performing on stage since the age of 5, she completed her
							arangetram at the tender age of 9 and continued her formal
							training in Bharatanatyam. She also learned Mohiniyattam and
							Kuchipudi under renowned gurus to follow her passion for dance,
							alongside participating in and winning several prizes and youth
							festivals and university exams. Ms. Chithra was a dance teacher
							for 2 years at Bharatiya Vidhya Bhavan and Holy Grace Academy
							prior to joining Antara Institute of Performing Arts Dubai in the
							year 2019. She has attended the all-India conference on
							Music-Naatya in 2012 and 2013 and various art workshops, and
							functioned as a coordinator for the Guinness World Record of
							Mohiniyattam, visualizing Daivadasakam dance performed by 1,500
							dancers, held in Kodungallur in 2018.
							<br />
							<br />
							<span className="sm:text-2xl text-2xl text-orange-600">
								Guru Smt. Subathra Sudarshan{" "}
							</span>
							is a Bharatanaatyam dancer, teacher and a choreographer. She is
							the founder/artistic director of both Bharathakala Natya Academy
							one of the leading naatya school in Atlanta and Third Eye Dancers,
							a nonprofit organization that promotes art forms and charitable
							giving through dance. She is trained under the tutelage
							Padmabushan awardees Sri. V.P. Dhananjayan and Smt. Shanta
							Dhananjyan and received an advanced Diploma in Bharatanaatyam at
							their esteemed school Bharatakalanjali in India following the
							Kalakshetra tradition. She has also received many awards and
							recognitions. The title of “Naatya Poorna” by her Gurus, ‘Naatya
							Mayuri” award by Guru Srinvasa Arka in London, a monetary award of
							£5,000 from the National Lottery in England in recognition of her
							fundraising production, the title “Nritya Sevika” conferred by
							Nadhabramham in India for exemplary humanitarian contributions
							through naatyam to give back to the community locally in USA &
							India, the 2013 humanitarian award by Georgia Association of
							Physician of Indian Heritage are to name a few. She has made
							numerous television appearances. Subathra’s interview was featured
							in Jaya TV, India recognizing her incredible community involvement
							and her motto of “Giving through Dance”. Recently she featured in
							Kim of Queens, one of Lifetime Television reality show.
							<br />
							<br />
							She has extensively performed across India, Sri Lanka, Europe,
							Canada and USA and successfully staged many naatya dramas &
							charity fundraisers in England, North America and South America.
							Her prowess caught the attention of even the British royalty when
							she performed for Queen Elizabeth and Lady Diana. Her naatya
							productions televised in UK brought her acclaim and the Britons
							declared her as "A Unique visual beauty of grace, power and
							exuberance". Jungle Book – Adventures of Mowgly, Correspondences -
							the work of Mathematician S.Ramanujan a Bharatanaatyam Opera,
							Portrait of a Genius - A fascinating kaleidoscope of Europe's most
							celebrated child prodigy, Wolfgang Amadeus Mozart are a few of the
							productions that brought her the much deserved recognition. In the
							US, she has choreographed & staged phenomenal thematic productions
							including DayaaNidhi, Praana, Enchanted Snow White and
							Kalpavriksha. These productions always convey social messages and
							reached a wide array of audience. Proceeds from all her
							productions are given to charitable causes in India as well as in
							the US. As a special community involvement, she choreographed a
							dance drama with over 50 girls for the Syro Malabar Convention
							2012. Other recent noteworthy performances include her students’
							performance with Atlanta Women’s chorus rendition of Jai Bhavani
							where her chore and the performance in China by invitation by
							Chinese government. Her exceptional teaching abilities & style
							make the students not only learn Bharatanaatyam & culture but also
							become aware of many pressing social issues, and problems faced by
							the less fortunate. Subathra’s passion for naatyam and her
							dedication & commitment to her students is widely known. She
							encourages excellence in Bharatanaatyam, traditional folk dance
							and fusion performances and sets high standards. She is an
							extremely gifted teacher who excels at bringing out the best in
							her disciples.
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

						{/* <div className="absolute bottom-4 right-0 left-0">
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
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Guru;
