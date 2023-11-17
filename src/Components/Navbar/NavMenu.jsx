import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// import resume from "../assets/resume.pdf"

const NavMenu = () => {
	const [nav, setNav] = useState(false);
	// const [navColor, setnavColor ] = useState("#202235")

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "introduction",
		},
		{
			id: 3,
			link: "invitation",
		},
		{
			id: 4,
			link: "program broucher",
		},
		{
			id: 5,
			link: "gallery",
		},
		{
			id: 6,
			link: "contact",
		},
	];

	return (
		<div
			style={{ backgroundColor: "#202235", zIndex: 10 }}
			className="flex justify-between items-center w-full h-20 px-4 text-white font-bold fixed to-orange-600 shadow-md shadow-cyan-500/50">
			<div className="flex gap-2 items-center">
				<img
					src="https://i.postimg.cc/d1t5vwNY/Arpita-DP-small.jpg"
					alt="profile_image"
					className="w-12 rounded-full"
				/>

				<h1 className="sm:text-2xl  shadow-black font-style: italic ml-2">
					<a
						className="cursor-pointer link-underline link-underline-black"
						target="_blank"
						rel="noreferrer"
						href="#home"
					>
						Arpita's Arangetram
					</a>
				</h1>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="nav-links px-4 cursor-pointer capitalize font-bold text-xl text-black-500 hover:scale-105 hover:text-orange-600 duration-200 "
					>
						<Link to={link} spy={true} smooth={true} offset={-100} duration={500}>
							{link}
						</Link>
					</li>
				))}
				<li className="nav-links px-4 cursor-pointer capitalize font-bold text-xl text-black-500 hover:scale-105 hover:text-black duration-200 link-underline">
					{/* <a 
          href={#}
          download={true}
          // target="_blank"
          // rel="noreferrer"
          >
            Resume</a> */}
				</li>
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-2 text-2xl"
						>
							<Link
								offset={-100}
								onClick={() => setNav(!nav)}
								to={link}
								smooth
								duration={500}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavMenu;
