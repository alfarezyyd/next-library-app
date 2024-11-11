import {FaHouse} from "react-icons/fa6";
import {FaBell, FaBook, FaQrcode, FaUser} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center">
      <div
        className="bg-[#005EEC] shadow-lg p-3 mb-5 flex justify-between items-center rounded-full max-w-md w-full mx-5">
        <div
          className="flex flex-row items-center gap-2 bg-white text-blue-600 rounded-full box-boder p-3">
          <FaHouse/>
          <span className="text-xs font-semibold">Home</span>
        </div>

        <div
          className="flex flex-row items-center text-wht-600 gap-2  text-white rounded-full box-boder p-3">
          <FaUser/>

        </div>
        <div
          className="flex flex-row items-center text-wht-600 gap-2  text-white rounded-full box-boder p-3">
          <FaQrcode/>
        </div>
        <div
          className="flex flex-row items-center text-wht-600 gap-2  text-white rounded-full box-boder p-3">
          <FaBell/>

        </div>

        <div
          className="flex flex-row items-center text-wht-600 gap-2  text-white rounded-full box-boder p-3">
          <FaBook/>
        </div>

      </div>
    </div>

  )
}