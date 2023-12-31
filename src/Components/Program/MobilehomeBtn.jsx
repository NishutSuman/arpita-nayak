import React, { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";


function MobilehomeBtn() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 600) {
				// Change 200 to the amount you want
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);


	
	return (
		<div>
		{isVisible &&(
			<Link
				to={"/"}
				className="flex justify-between  items-center mt-10 text-white fixed bottom-[15%] right-0 mr-5 sm:hidden z-10"
				rel="noreferrer"
			>
				<div className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer">
					{" "}
					<IoHome className="text-2xl" />
				</div>
			</Link>
		)}
			
		</div>
	);
}

export default MobilehomeBtn;
