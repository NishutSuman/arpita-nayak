import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function MoveTop() {
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

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // For smooth scrolling, use 'auto' for instant scrolling
		});
	};
	return (
		<>
			{isVisible && (
				<div className="items-center text-white fixed bottom-[2%] right-0 mr-5 sm:hidden z-10">
					<button
						onClick={handleScrollToTop}
						className="group text-white hover:text-yellow-200 w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-blue-600 to-blue-700 cursor-pointer"
					>
						<FaArrowUp className="text-2xl" />
					</button>
				</div>
			)}
		</>
	);
}

export default MoveTop;
