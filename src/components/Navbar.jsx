import {FaBell, FaBook, FaQrcode, FaUser} from "react-icons/fa";
import {FaHouse} from "react-icons/fa6";

export default function Navbar({whichActive}) {
  return (<div
    className="fixed bottom-12 md:bottom-0 w-full flex justify-center items-center font-fraunces"
    style={{paddingBottom: "env(safe-area-inset-bottom)"}} // Tambahkan padding safe-area untuk iOS
  >
    <div
      className="bg-[#005EEC] shadow-lg py-3 mb-5 flex justify-evenly items-center rounded-full max-w-xs  w-full">
      <a
        href={"/catalog"}
        className={`flex flex-row items-center gap-2 rounded-full box-border ${whichActive === "Home" ? "text-blue-600 bg-white p-3" : ""} p-2`}
      >
        <FaHouse/>
        {whichActive === "Home" && (<span className="text-xs font-semibold">Home</span>)}
      </a>
      <a
        href={"/profile"}
        className={`flex flex-row items-center gap-2 p-3 rounded-full box-border ${whichActive === "Profile" ? "text-blue-600 bg-white " : ""} p-2`}
      >
        <FaUser/>
        {whichActive === "Profile" && (<span className="text-xs font-semibold">Profile</span>)}
      </a>
      <div
        className={`flex flex-row items-center gap-2 p-3 rounded-full box-border ${whichActive === "House" ? "text-blue-600 bg-white" : ""} p-2`}
      >
        <FaQrcode/>
        {whichActive === "House" && (<span className="text-xs font-semibold">Home</span>)}
      </div>
      <a
        href={"/notification"}
        className={`flex flex-row items-center gap-2 p-3 rounded-full box-border ${whichActive === "Notification" ? "text-blue-600 bg-white " : ""} p-2`}
      >
        <FaBell/>
        {whichActive === "Notification" && (<span className="text-xs font-semibold">Notification</span>)}
      </a>
      <a
        href={"/about"}
        className={`flex flex-row items-center gap-2 p-3 rounded-full box-border ${whichActive === "About" ? "text-blue-600 bg-white " : ""} p-2`}
      >
        <FaBook/>
        {whichActive === "About" && (<span className="text-xs font-semibold">About</span>)}
      </a>
    </div>
  </div>);
}
