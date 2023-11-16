import React from "react";
import { IoTicket, IoLogoWhatsapp } from "react-icons/io5";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";

// import { Link } from "react-scroll";
import shape from "../../Assets/shape-bg.png";

const Home = () => (
	<div
		style={{ backgroundColor: "#202235" }}
		name="home"
		className="h-full w-full home "
	>
		<div className="max-w-screen-lg mx-auto flex flex-col gap-28 items-center justify-between md:flex-row pt-20">
			<div className="big-screen w-[40%] space-x-2 shadow-orange-600 mt-[-4%]">
				<img
					src={"https://i.postimg.cc/yNx558WS/10.png"}
					alt="profile"
					className="mt-20 h-full w-full"
				/>
			</div>
			<div className="small-screen hidden mt-8">
				<div>
					<img
						src="https://i.postimg.cc/yNx558WS/10.png"
						alt="profile"
						className="border-orange-600 w-74  rounded-full bg-fixed"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center w-[90%] items-center">
				<div className="">
					<h2 className="sm:text-5xl font-bold font-f2 text-white">
						You Are Invited To{" "}
						<span className="font-f2 text-amber-400 ">
							Bharatnatyam Arangetram Of{" "}
						</span>
						Arpita Nayak
					</h2>
					<h3 className="mt-1 text-3xl text-amber-200 font-f3">
						Dicsiple of Smt. Vimmi B. Eswar and Ms. Chithra Rajan
					</h3>
					<h3 className="mt-5 text-2xl text-white font-f1">
						23rd December, 2023 | Saturday<br></br>
						at Rail Auditorium, Chandrasekharpur, Bhubaneswar
					</h3>
				</div>
				<div className="flex gap-4">
					<a
						href={"tel:6370274692"}
						className="flex justify-between items-center mt-10 text-white"
						download={true}
						target="_blank"
						rel="noreferrer"
					>
						<IoMdCall className="h-8 w-8 hover:text-yellow-200"/>
					</a>
					<a
						href={"https://wa.me/+18622520390"}
						className="flex justify-between items-center mt-10 text-white"
						download={true}
						target="_blank"
						rel="noreferrer"
					>
						<IoLogoWhatsapp className="h-8 w-8 hover:text-yellow-200" />
					</a>
					<a
						href={"mailto:arpitaarangetram@gmail.com"}
						className="flex justify-between items-center mt-10 text-white"
						download={true}
						target="_blank"
						rel="noreferrer"
					>
						<IoIosMail className="h-8 w-8 hover:text-yellow-200"/>
					</a>
				</div>
				<div className="flex gap-4">
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
		</div>
		<div style={{ backgroundColor: "#202235", marginTop: "-1%" }}>
			<img
				src={shape}
				alt="shape-img"
				style={{ width: "100%", height: "auto" }}
			/>
		</div>
	</div>
);

export default Home;
