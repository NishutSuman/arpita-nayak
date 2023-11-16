import React from "react";
import SocialLinks from "./SocialLinks";
import Contact from "./ContactForm";

function Footer() {
	return (
		<div style={{backgroundColor: "#202235", color:"white"}}>
        <h2 className="font-f2 text-orange-600 text-4xl font-bold">
				—•— CONTACT US —•—
			</h2>
			<div className="flex justify-between gap-6">
				<SocialLinks className="w-[50%]"/>
				<Contact className="w-[50%]"/>
			</div>
		</div>
	);
}

export default Footer;
