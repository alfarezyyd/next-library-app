import {FaHouse} from "react-icons/fa6";
import {FaBell, FaBook, FaQrcode, FaUser} from "react-icons/fa";

export default function Navbar({whichActive}) {
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center">
      <div
        className="bg-[#005EEC] shadow-lg p-3 mb-5 flex justify-around items-center rounded-full max-w-md w-full mx-5">
        <div className={`flex flex-row items-center gap-2  rounded-full box-border 
          ${whichActive === "Home" ? 'text-blue-600 bg-white p-3' : ''}`}>
          <FaHouse/>
          {whichActive === "Home" &&
            <span className="text-xs font-semibold">Home</span>
          }
        </div>
        <div className={`flex flex-row items-center gap-2 p-3 rounded-full box-border 
          ${whichActive === "Profile" ? 'text-blue-600 bg-white ' : ''}`}>
          <FaUser/>

          {whichActive === "Profile" &&
            <span className="text-xs font-semibold">Profile</span>
          }
        </div>
        <div className={`flex flex-row items-center gap-2 p-3 rounded-full box-border 
          ${whichActive === "House" ? 'text-blue-600 bg-white' : ''}`}>
          <FaQrcode/>
          {whichActive === "House" &&
            <span className="text-xs font-semibold">Home</span>
          }
        </div>


        <div className={`flex flex-row items-center gap-2 p-3  rounded-full box-border 
          ${whichActive === "House" ? 'text-blue-600 bg-white ' : ''}`}>
          <FaBell/>
          {whichActive === "House" &&
            <span className="text-xs font-semibold">Home</span>
          }
        </div>
        <div className={`flex flex-row items-center gap-2 p-3 rounded-full box-border 
          ${whichActive === "House" ? 'text-blue-600 bg-white ' : ''}`}>
          <FaBook/>
          {whichActive === "House" &&
            <span className="text-xs font-semibold">Home</span>
          }
        </div>

      </div>
    </div>

  )
}