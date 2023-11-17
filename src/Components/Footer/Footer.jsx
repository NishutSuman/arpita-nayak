import React from "react";
import SocialLinks from "./SocialLinks";
import Contact from "./ContactForm";

function Footer() {
	return (
		<div style={{ backgroundColor: "#202235", color: "white" }} className="">
			<h2 className="font-f2 text-orange-600 sm:text-4xl text-2xl pt-10 font-bold">
				—•— CONTACT US —•—
			</h2>
			<div className="flex sm:flex-row flex-col-reverse sm:gap-4 gap-1 items-center">
				<SocialLinks />
				<Contact />
			</div>
		</div>
	);
}

export default Footer;
