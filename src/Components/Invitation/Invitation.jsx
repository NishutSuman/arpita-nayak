// import React, { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import { IoTicket, IoLogoWhatsapp } from "react-icons/io5";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FcDonate } from "react-icons/fc";
// import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

function Invitation({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) {
	return (
		<div
			className="mt-14 text-white p-10"
			style={{ backgroundColor: "#202235" }}
		>
			<h2 className="font-f2 text-orange-600 text-4xl font-bold">
				—•— INVITATION —•—
			</h2>

			<div className="flex gap-10 mt-10 justify-center items-center ">
				<div className="flex-co justify-center w-[50%] ">
					<VideoPlayer />
                    <h4 className="text-4xl font-f3 mt-6">Your Presence is our present. Please, no gifts! If you feel so inclined, please donate to the needy ones. We will be more happy.</h4>
                    
				</div>

				<div className="w-[60%] font-f1">
					<h4 className="text-3xl">
						Guru Smt. Vimmi B. Eswar and Ms. Chithra Rajan & Antara Institute of Performing Arts along with
						Mr. Ashok Nayak and Mrs. Sasmita Nayak cordially invite you and your family to the
					</h4>
					<h3 className="text-5xl mt-6 text-orange-600 mb-6 font-f3">
						Bharatnatyam Arangetram of <br />
						Arpita Nayak
					</h3>
					<h4 className="text-2xl">
						Date:{" "}
						<span className="text-amber-200 text-2xl">
							Saturday, 23rd December, 2023
						</span>
					</h4>
					<h4 className="text-2xl">
						Time:{" "}
						<span className="text-amber-200 text-2xl">
							05:00 PM to 08:00 PM IST
						</span>
					</h4>
					<h4 className="text-2xl">
						Entry:{" "}
						<span className="text-amber-200 text-2xl">4:30 AM Onwards</span>
					</h4>
					<h4 className="text-2xl">
						Venue:{" "}
						<span className="text-amber-200 text-2xl">
							Rail Auditorium, Chandrasekharpur, <br />
							Bhubaneswar, Odisha, 751016
						</span>
					</h4>

					
				</div>
			</div>
            <div className="flex gap-4 items-center justify-center">
						<a
							href={"https://event.fydo.in/arpitas-bharatnatyam-arangetram/"}
							className="flex justify-between  items-center mt-10 text-white "
							download={true}
							target="_blank"
							rel="noreferrer"
						>
							<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
								{" "}
								<span className="font-medium text-xl">Book Pass</span>{" "}
								<IoTicket className="text-2xl" />
							</div>
						</a>
						<a
							href={"https://maps.app.goo.gl/rkM4CaUUSPXyc4F46"}
							className="flex justify-between  items-center mt-10 text-white"
							download={true}
							target="_blank"
							rel="noreferrer"
						>
							<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
								{" "}
								<span className="font-medium text-xl">Get Direcction</span>{" "}
								<FaLocationDot className="text-2xl" />
							</div>
						</a>
						{/* <a
							href={"http://stackoverflow.com"}
							className="flex justify-between  items-center mt-10 text-white"
							download={true}
							target="_blank"
							rel="noreferrer"
						>
							<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
								{" "}
								<span className="font-medium text-xl">Donate</span>{" "}
								<FcDonate className="text-2xl" />
							</div>
						</a> */}
						<a
							href={"http://stackoverflow.com"}
							className="flex justify-between  items-center mt-10 text-white pointer-events-none"
							download={true}
							target="_blank"
							rel="noreferrer"
						>
							<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
								{" "}
								<span className="font-medium text-xl">Watch Live</span>{" "}
								<MdLiveTv className="text-2xl" />
							</div>
						</a>
					</div>
		</div>
	);
}

export default Invitation;
