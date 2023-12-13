import React, { useEffect } from "react";
import Shisya from "./Shisya";
import Guru from "./Guru";
import Musician1 from "./Musician1";
import Schedule from "./Schedule";


import MobilehomeBtn from "./MobilehomeBtn";
import MoveTop from "./MoveTop";
import Guest from "./Guests";


let shisyaSlide = [
	"https://i.postimg.cc/WpZRTz8G/3.png",
	"https://i.postimg.cc/5NWh0JKZ/2.png",
];
let guruSlide = [
	"https://i.postimg.cc/LXH3kLXW/013.jpg",
	"https://i.postimg.cc/sXJLYJYK/009.jpg",
	"https://i.postimg.cc/hGRrjHqc/014.jpg",
	"https://i.postimg.cc/yxYbvSnK/010.jpg",
	"https://i.postimg.cc/d0rp1FDb/005.jpg",
	"https://i.postimg.cc/bNqYtrVN/Subathra-Sudarshan.jpg",
];

function Broucher() {
	
	return (
		<div className=" bg-lime-100 relative">
			<h2 className="font-f2 text-orange-600 sm:text-4xl text-2xl font-bold pt-24">
				—•— Program Broucher —•—
			</h2>
			<MobilehomeBtn/>
			<MoveTop/>
			<Shisya autoSlide={true} autoSlideInterval={3000}>
				{shisyaSlide.map((s, index) => (
					<img key={index} src={s} alt="pics" className="h-[100%] w-auto object-cover" />
				))}
			</Shisya>
			<Guru autoSlide={true} autoSlideInterval={3000}>
				{guruSlide.map((s, index) => (
					<img key={index} src={s} alt="pics" className="h-[100%] w-auto object-cover]" />
				))}
			</Guru>
			<Guest/>
			<Musician1 />
			<Schedule />

		</div>
	);
}

export default Broucher;
