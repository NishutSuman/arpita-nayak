import { useState, useEffect } from 'react';
import { IoIosCall } from "react-icons/io";

const Popup = ({ onClose }) => {

        const [showPopup, setShowPopup] = useState(false);
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setShowPopup(true);
          }, 2000);
      
          return () => clearTimeout(timer);
        }, []);
      
        const handleBookPass = () => {
          window.open('https://event.fydo.in/arpitas-bharatnatyam-arangetram/', '_blank');
        };
      
        const handleClose = () => {
          setShowPopup(false);
          onClose();
        };
      
        if (!showPopup) {
          return null;
        }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-lime-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 font-bold">Arpita's Arangetram</h2>
        <p className="mb-4 font-bold">For pass related concern, Please contact Mr. Ashok Nayak </p>
        <div className="flex justify-around">
        <a
								className="bg-gradient-to-b from-orange-600 to-orange-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
								href="tel:+91 6370274692"
								target="_blank"
								rel="noreferrer"
							>
								<IoIosCall className="w-10 h-10" />
							</a>
          <button
            onClick={handleClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
