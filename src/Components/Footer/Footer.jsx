import React from "react";
import SocialLinks from "./SocialLinks";
import Contact from "./ContactForm";

function Footer() {
	return (
		<div style={{ backgroundColor: "#202235", color: "white" }} className="w-[100%]">
			<h2 className="font-f2 text-orange-600 text-4xl font-bold">
				—•— CONTACT US —•—
			</h2>
			<div className="flex justify-center gap-4 items-center">
				<SocialLinks />
				<Contact />
			</div>
		</div>
	);
}

export default Footer;
