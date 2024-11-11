import {FaHouse} from "react-icons/fa6";
import {FaBell, FaBook, FaQrcode, FaUser} from "react-icons/fa";

export default function Navbar({whichActive}) {
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center font-fraunces">
      <div className="bg-[#005EEC] shadow-lg py-3 mb-5 flex justify-evenly items-center rounded-full max-w-xs w-full">
        <a href={"/catalog"} className={`flex flex-row items-center gap-2  rounded-full box-border 
          ${whichActive === "Home" ? 'text-blue-600 bg-white p-3' : ''}`}>
          <FaHouse/>
          {whichActive === "Home" &&
            <span className="text-xs font-semibold">Home</span>
          }
        </a>
        <a href={'/profile'} className={`flex flex-row items-center gap-2 p-3 rounded-full box-border 
          ${whichActive === "Profile" ? 'text-blue-600 bg-white ' : ''}`}>
          <FaUser/>

          {whichActive === "Profile" &&
            <span className="text-xs font-semibold">Profile</span>
          }
        </a>
        <div className={`flex flex-row items-center gap-2 p-3 rounded-full box-border 
          ${whichActive === "House" ? 'text-blue-600 bg-white' : ''}`}>
          <FaQrcode/>
          {whichActive === "House" &&
            <span className="text-xs font-semibold">Home</span>
          }
        </div>


        <a href={"/notification"} className={`flex flex-row items-center gap-2 p-3  rounded-full box-border 
          ${whichActive === "Notification" ? 'text-blue-600 bg-white ' : ''}`}>
          <FaBell/>
          {whichActive === "Notification" &&
            <span className="text-xs font-semibold">Notification</span>
          }
        </a>
        <a href={"/about"} className={`flex flex-row items-center gap-2 p-3 rounded-full box-border 
          ${whichActive === "About" ? 'text-blue-600 bg-white ' : ''}`}>
          <FaBook/>
          {whichActive === "About" &&
            <span className="text-xs font-semibold">About</span>
          }
        </a>

      </div>
    </div>

  )
}