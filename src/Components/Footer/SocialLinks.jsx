import React from "react";

import { FiCodesandbox } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-scroll";
const SocialLinks = () => {
	return (
		<div>
			<div className="flex-col m-auto font-bold p-5 justify-center items-center gap-10">
				<div className="flex gap-10">
					<div className="flex-col gap-4 w-full justify-center items-center">
						<div className="border-2 rounded-full w-20 flex justify-center items-center border-hidden text-black bg-orange-600 h-20	">
							{" "}
							<a className="" href="https://kritikumari4666@gmail.com">
								<ImMail4 className="w-14 h-14" />
							</a>{" "}
						</div>
						<div className="md:text-xl sm: text-sm">
							arpitaarangetram@gmail.com
						</div>
					</div>
					<div className="flex-col gap-4 w-full justify-center items-center">
						<div className="border-2 rounded-full w-20 flex justify-center items-center border-hidden text-black bg-orange-600 h-20	">
							{" "}
							<a className="" href="https://kritikumari4666@gmail.com">
								<IoIosCall className="w-14 h-14" />
							</a>{" "}
						</div>
						<div className="md:text-xl sm: text-sm">+916370274692</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialLinks;
