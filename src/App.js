import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Intro from "./Components/Intro/Intro";
import NavMenu from "./Components/Navbar/NavMenu";
import Invitation from "./Components/Invitation/Invitation";
import Footer from "./Components/Footer/Footer";
import Stats from "./Components/Stats/Stats";
import Gallery from "./Components/Gallery/Gallery";
import Broucher from "./Components/Program/Broucher";
import MoveTop from "./Components/Program/MoveTop";

let introSlide = [
	"https://i.postimg.cc/WpZRTz8G/3.png",
	"https://i.postimg.cc/5NWh0JKZ/2.png",
];
let invitationSlide = [
	"https://i.postimg.cc/DZW9WwTK/1.png",
	"https://i.postimg.cc/pTggKMW5/8.png",
];
let gallerySlide = [
	"https://i.postimg.cc/7YZFNjQz/006.jpg",
	"https://i.postimg.cc/m2p0pV05/002.jpg",
	"https://i.postimg.cc/PxkGzxBf/007.jpg",
	"https://i.postimg.cc/wvzPRrm7/003.jpg",
	"https://i.postimg.cc/BbqdkzSd/008.jpg",
	"https://i.postimg.cc/W1DxBgVb/004.jpg",
	"https://i.postimg.cc/7hmpkNbb/01.jpg",
	"https://i.postimg.cc/brCFMNFt/011.jpg",
	"https://i.postimg.cc/XqJsw677/012.jpg",
];

function App() {
	return (
		<div className="App">
			<NavMenu />

				<Routes>
					<Route exact path="/" element={<Wrapper />} />
					<Route path="/program-broucher" element={<Broucher />} />
				</Routes>


			<Footer />
		</div>
	);
}

const Wrapper = () => {
	return (
		<div>
    <MoveTop/>
			<Home />
			<Intro autoSlide={true} autoSlideInterval={3000}>
				{introSlide.map((s, index) => (
					<img key={index} src={s} alt="pics" className="h-[100%] w-[100%]" />
				))}
			</Intro>
			<Invitation autoSlide={true} autoSlideInterval={3000}>
				{invitationSlide.map((s, index) => (
					<img src={s} key={index} alt="pics" className="h-[100%] w-[100%]" />
				))}
			</Invitation>

			<Stats />
			<Gallery autoSlide={true} autoSlideInterval={5000}>
				{gallerySlide.map((s, index) => (
					<img
						src={s}
            key={index}
						alt="pics"
						className="h-[100%] w-auto object-cover "
					/>
				))}
			</Gallery>
		</div>
	);
};
export default App;
