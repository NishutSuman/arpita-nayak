import './App.css';
import Home from './Components/Home/Home';
import Intro from './Components/Intro/Intro';
import NavMenu from './Components/Navbar/NavMenu';
import Invitation from './Components/Invitation/Invitation';
import Footer from './Components/Footer/Footer';
import Stats from './Components/Stats/Stats';

let introSlide=["https://i.postimg.cc/WpZRTz8G/3.png", "https://i.postimg.cc/5NWh0JKZ/2.png"];
let invitationSlide=["https://i.postimg.cc/DZW9WwTK/1.png", "https://i.postimg.cc/pTggKMW5/8.png"];


function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Home/>
      <Intro autoSlide={true} autoSlideInterval={3000}>{introSlide.map((s)=><img src={s} alt='pics' className='h-[100%] w-[100%]'/>)}</Intro>
      <Invitation autoSlide={true} autoSlideInterval={3000}>{invitationSlide.map((s)=><img src={s} alt='pics' className='h-[100%] w-[100%]'/>)}</Invitation>
      <Stats/>
      <Footer/>
    </div>
  );
}

export default App;
