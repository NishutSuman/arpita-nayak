import React from "react";
import { IoTicket, IoLogoWhatsapp } from "react-icons/io5";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";
import Bg2 from "../../Assets/bg2.png";
import temple1 from "../../Assets/temple1-1.png";

// import { Link } from "react-scroll";
import shape from "../../Assets/shape-bg.png";

const Home = () => (
	<div
		style={{ backgroundColor: "#202235" }}
		name="home"
		className="h-full w-full home relative z-0"
	>
		<div className="max-w-screen-lg mx-auto flex flex-col sm:gap-28 items-center justify-between md:flex-row pt-20 ">
			<div className="big-screen sm:w-[40%] space-x-2 shadow-orange-600 mt-[-4%] ml-5">
				<img
					src={"https://i.postimg.cc/3w01m4d9/6.png"}
					alt="profile"
					className=" h-[100%] w-[100%] mt-[20rem] sm:mt-[15rem] sm:ml-[3rem]"
				/>
				<img
					src={"https://i.postimg.cc/DZW9WwTK/1.png"}
					alt="profile"
					className="sm:mt-10 h-[40%] w-[70%] absolute z-[-1] top-[10rem] left-8 sm:h-[60%] sm:top-16 sm:w-[20%] sm:left-44"
				/>
				<img
					src={Bg2}
					alt="profile"
					className="sm:mt-10 h-[15%] w-[85%] absolute z-[-2] top-[36rem] sm:h-[20%] sm:top-[24rem] sm:w-[30%] sm:left-[9rem]"
				/>
				<img
					src={temple1}
					alt="profile"
					className="sm:mt-10 h-[15%] w-[84%] absolute z-[-4] top-[8rem] sm:h-[30%] sm:top-16 sm:w-[30%] sm:left-[9rem]"
				/>
			</div>

			{/* <div className="small-screen hidden mt-4">
				<div>
					<img
						src="https://i.postimg.cc/yNx558WS/10.png"
						alt="profile"
						className="border-orange-600 w-74  rounded-full bg-fixed"
					/>
				</div>
			</div> */}
			<div className="flex flex-col justify-center w-[90%] items-center sm:mt-10 mt-10">
				<div className="">
					<h2 className="sm:text-5xl text-3xl font-bold font-f2 text-white">
						You Are Invited To{" "}
						<span className="font-f2 text-amber-400 text-4xl">
							Bharatnatyam Arangetram Of{" "}
						</span>
						<br />
						Arpita Nayak
					</h2>
					{/* <h3 className="mt-1 text-3xl text-amber-200 font-f3">
						Dicsiple of Smt. Vimmi B. Eswar and Ms. Chithra Rajan
					</h3> */}
					<h3 className="mt-5 sm:text-2xl text-amber-200 font-f1">
						23rd December, 2023 | Saturday<br></br>
						at Rail Auditorium, Chandrasekharpur, Bhubaneswar, Odisha
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
						<IoMdCall className="h-8 w-8 hover:text-yellow-200" />
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
						<IoIosMail className="h-8 w-8 hover:text-yellow-200" />
					</a>
				</div>
				<div className="sm:flex-row sm:gap-4 items-center flex flex-col mb-4">
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
						className="flex justify-between items-center sm:mt-10 text-white pointer-events-none mt-[-4%]"
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
