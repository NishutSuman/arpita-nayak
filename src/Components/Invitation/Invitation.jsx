// import React, { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import { IoTicket } from "react-icons/io5";
// import { IoMdCall, IoIosMail } from "react-icons/io";
// import { MdLiveTv } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFilePdf, FaLocationArrow } from "react-icons/fa6";
import "../Home/Home.css";
import InvitationPDF from "../../Assets/Invitation.pdf";
import { Link } from "react-router-dom";
// import { FcDonate } from "react-icons/fc";
// import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

function Invitation({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) {
	return (
		<div
			className="mt-14 text-white sm:p-10 invitation homebodyRev"
			// style={{ backgroundColor: "#202235" }}
			name="invitation"
		>
			<h2 className="font-f2 text-orange-600 sm:text-4xl text-2xl font-bold pt-6">
				—•— INVITATION —•—
			</h2>

			<div className=" flex sm:flex-row flex-col-reverse gap-10 mt-10 justify-center items-center ">
				<div className="flex-co justify-center w-[100%] md:w-[50%] p-2">
					<VideoPlayer />
					<h4 className="sm:text-4xl text-3xl font-f3 mt-6">
						Your Presence is our present.
						<br /> Love and Blessings are the best gifts.
					</h4>
				</div>

				<div className="sm:w-[60%] w-full font-f1">
					<h4 className="sm:text-3xl text-2xl">
						With the blessings of the Almighty & Gurus Antara Institute Of
						Performing Arts Dubai along with Mrs. Sasmita Nayak, Mr.Ashok Nayak
						and Nayak family cordially invite you and your family to the
					</h4>
					<h3 className="sm:text-5xl text-4xl mt-6 text-[#f7f446] mb-6 font-f3">
						Bharatanatyam Arangetram of <br />
						Arpita Nayak
					</h3>
					<h4 className="sm:text-2xl text-xl">
						<span className="text-amber-200 sm:text-2xl">
							on Saturday 23rd December, 2023
						</span>
					</h4>
					<h4 className="sm:text-2xl text-xl">
						<span className="text-amber-200 sm:text-2xl">
							from 05:00 PM to 08:00 PM IST
						</span>
					</h4>
					<h4 className="sm:text-2xl text-xl mt-2">
						Entry:{" "}
						<span className="text-amber-200 sm:text-2xl">4:00 PM Onwards</span>
					</h4>
					<h4 className="sm:text-2xl text-xl">
						Venue:{" "}
						<span className="text-amber-200 sm:text-2xl">
							Rail Auditorium, Chandrasekharpur, <br />
							Bhubaneswar, Odisha, 751016
						</span>
					</h4>
				</div>
			</div>
			<div className="flex sm:flex-row flex-col sm:gap-4 items-center justify-center pb-10">
				<a
					href={"https://event.fydo.in/arpitas-bharatnatyam-arangetram/"}
					className="flex justify-between items-center sm:mt-10 mt-10 text-white "
					download={true}
					target="_blank"
					rel="noreferrer"
				>
					<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
						{" "}
						<span className="font-medium text-xl">Book Free Pass</span>{" "}
						<IoTicket className="text-2xl" />
					</div>
				</a>
				{/* <a
					href={"http://stackoverflow.com"}
					className="flex justify-between  items-center sm:mt-10 text-white pointer-events-none"
					download={true}
					target="_blank"
					rel="noreferrer"
				>
					<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
						{" "}
						<span className="font-medium text-xl">Watch Live</span>{" "}
						<MdLiveTv className="text-2xl" />
					</div>
				</a> */}
				<a
					href={"https://maps.app.goo.gl/rkM4CaUUSPXyc4F46"}
					className="flex justify-between items-center sm:mt-10 text-white"
					download={true}
					target="_blank"
					rel="noreferrer"
				>
					<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
						{" "}
						<span className="font-medium text-xl">Get Direction</span>{" "}
						<FaLocationDot className="text-2xl" />
					</div>
				</a>
				
				{/* <a
					href="https://www.arpitanayak.com/program-broucher"
					className="flex justify-between items-center sm:mt-10 text-white"
					download={true}
					target="_self"
					rel="noreferrer"
				>
					<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
						{" "}
						<span className="font-medium text-xl">
							Program Broucher
						</span>{" "}
						<FaLocationArrow className="text-2xl" />
					</div>
				</a> */}
				<Link
					to={"/program-broucher"}
					// className="flex justify-between  items-center mt-10 text-white fixed bottom-[10%] right-0 mr-5 sm:hidden z-10"
					className="flex justify-between items-center sm:mt-10 text-white"
					rel="noreferrer"
				>
					<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
						{" "}
						<span className="font-medium text-xl">
							Program Broucher
						</span>{" "}
						<FaLocationArrow className="text-2xl" />
					</div>
				</Link>
				<a
					href={InvitationPDF}
					className="flex justify-between items-center sm:mt-10 text-white"
					download={true}
					target="_blank"
					rel="noreferrer"
				>
					<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
						{" "}
						<span className="font-medium text-xl">
							Download Invitation
						</span>{" "}
						<FaFilePdf className="text-2xl" />
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
			</div>

			{/* Dress Code */}
			<div className="text-xl font-f1">
				<h5>
					<span className="text-amber-200 font-bold">Attire Requested:</span> <br />{" "}
					Preferably Sambalpuri attire to celebrate the rich cultural heritage
					of Odisha, or any Indian Ethnic wear that showcases the diversity and
					beauty of our nation or Business Formal wear for an elegant and
					professional touch.
				</h5>
				<h5 className="mt-2">
					<span className="text-amber-200 font-bold">
						Refreshments and Dinner:
					</span>{" "}
					<br /> Snacks and refreshments will be provided at 4:00pm and Dinner
					will be served after the program
				</h5>
			</div>
		</div>
	);
}

export default Invitation;
