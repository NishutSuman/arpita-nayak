import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import profilePic from "../../Assets/Arpita Profile pic.png";
// import Broucher from "../Program/Broucher";
// import resume from "../assets/resume.pdf"

const NavMenu = () => {
	const [nav, setNav] = useState(false);
	const [activeNav, setActiveNav] = useState("");


	const links = [
		{
			id: 1,
			link: "home",
			to: "/",
		},
		{
			id: 2,
			link: "introduction",
			to: "/introduction",
		},
		{
			id: 3,
			link: "invitation",
			to: "/invitations",
		},
		// {
		// 	id: 4,
		// 	link: "program broucher",
		// 	to: "/program-broucher",
		// },
		{
			id: 5,
			link: "gallery",
		},
		{
			id: 6,
			link: "contact",
		},
	];


	const handleSetActive = (to) => {
		setActiveNav(to);
	};

const location = useLocation();
	useEffect(() => {
	 
	}, [location]);
	return (
		<div
			style={{ backgroundColor: "#202235", zIndex: 10 }}
			className="flex justify-between items-center w-full h-20 px-4 text-white font-bold fixed to-orange-600 shadow-md shadow-cyan-500/50"
		>
			<div className="flex gap-2 items-center">
				<img
					src={profilePic}
					alt="profile_image"
					className="w-12 border-2 rounded-full"
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

			<ul className="hidden md:flex gap-1">
				

				{links.map(({ id, link }) => (
					<li
						key={id}
						className={
							"nav-links px-4 cursor-pointer capitalize font-bold text-xl text-black-500 hover:scale-105 hover:text-orange-600 duration-200 "
						}
					>
						{link === "home" ? (
							<NavLink
								to="/"
								className={
									window.location.pathname === "/program-broucher" &&
									"bg-[crimson] p-2 rounded-md hover:bg-red-500 hover:text-white/80"
								}
							>
								Home
							</NavLink>
						) : (
							<Link
								to={link}
								spy={true}
								smooth={true}
								offset={-100}
								activeClass="active"
								onSetActive={handleSetActive}
								duration={500}
							>
								{link}
							</Link>
						)}
					</li>
				))}
				<li className="nav-links px-4 cursor-pointer capitalize font-bold text-xl text-black-500 hover:scale-105 hover:text-orange-600 duration-200 link-underline">
					<NavLink
						className={
							window.location.pathname === "/" &&
							"bg-[crimson] p-2 rounded-md hover:bg-red-500 hover:text-white/80"
						}
						to="/program-broucher"
					>
						Program Broucher
					</NavLink>
					{/* <a
						href={"/broucher-programe"}
						// download={true}
						// target="_blank"
						rel="noreferrer"
					>
						Program Broucher
					</a> */}
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
						className={
							"nav-links px-8 cursor-pointer capitalize font-bold text-2xl text-black-500 hover:scale-105 hover:text-orange-600 duration-200 "
						}
					>
						{link === "home" ? (
							<NavLink
								to="/"
								className={
									window.location.pathname === "/program-broucher" &&
									"bg-[crimson] rounded-md text-white px-2 py-1 inline-block mt-2"
								}
								onClick={() => setNav(false)}
							>
								Home
							</NavLink>
						) : (
							<Link
								to={link}
								spy={true}
								smooth={true}
								offset={-100}
								activeClass="active"
								onSetActive={handleSetActive}
								duration={500}
								onClick={() => setNav(false)}
							>
								{link}
							</Link>
						)}
					</li>
				))}
				<li className="text-2xl ">
					<NavLink
						className={
							window.location.pathname === "/" &&
							"bg-[crimson] px-2 py-1 rounded-md text-white inline-block mt-2"
						}
						onClick={() => setNav(false)}
						to="/program-broucher"
					>
						Program Broucher
					</NavLink>
					{/* <a
						href={"/broucher-programe"}
						// download={true}
						// target="_blank"
						rel="noreferrer"
					>
						Program Broucher
					</a> */}
				</li>
				</ul>
			)}
		</div>
	);
};

export default NavMenu;
