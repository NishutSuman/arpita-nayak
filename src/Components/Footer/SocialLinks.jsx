import React from "react";
import Antara from "../../Assets/Antara Logo.png";
import { ImMail4 } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

import { Link } from "react-scroll";
const SocialLinks = () => {
	return (
		<div>
			<div className="flex flex-col font-bold justify-center items-center gap-20 w-[40rem]">
				{/* Collaboration */}
				<div className="flex flex-col justify-center items-center">
					<h3>In collaboration with</h3>
					<img src={Antara} alt="Antara" className="h-20 w-30" />
					<h3>Antara Institute Of Performing Arts, Dubai</h3>
				</div>
				<div className="flex justify-around gap-5">
					<div className="flex flex-col gap-2 justify-center items-center">
						<div className="border-2 rounded-full w-12 flex justify-center items-center border-hidden text-black bg-orange-600 h-12">
							{" "}
							<a
								className=""
								href="mailto:arpitaarangetram@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<ImMail4 className="w-10 h-10" />
							</a>{" "}
						</div>
						<div className="text-md">arpitaarangetram@gmail.com</div>
					</div>
					<div className="flex flex-col justify-center gap-2 items-center">
						<div className="border-2 rounded-full w-12 flex justify-center items-center border-hidden text-black bg-orange-600 h-12	">
							{" "}
							<a
								className=""
								href="tel:6370274692"
								target="_blank"
								rel="noreferrer"
							>
								<IoIosCall className="w-10 h-10" />
							</a>{" "}
						</div>
						<div className="text-md">+91 6370274692</div>
					</div>
					<div className="flex flex-col justify-center gap-2 items-center">
						<div className="border-2 rounded-full w-12 flex justify-center items-center border-hidden text-black bg-orange-600 h-12	">
							{" "}
							<a
								className=""
								href="https://wa.me/+18622520390"
								target="_blank"
								rel="noreferrer"
							>
								<IoLogoWhatsapp className="w-10 h-10" />
							</a>{" "}
						</div>
						<div className="text-md">+1 (862) 252-0390</div>
					</div>
				</div>
				<div>
					<h3 className="font-f1 text-gray-300">©️ 2023, All the rights are reserved with Mr. Ashok Nayak</h3>
					<h4 className="font-f1 text-gray-300">Made with ❤️ by Dev. <a href="www.linkedin.com/in/nishutsuman" rel="noreferrer" target="_blank">Nishut Suman</a></h4>
				</div>
			</div>
		</div>
	);
};

export default SocialLinks;
