import {Chip, Image} from "@nextui-org/react";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {FaAddressCard} from "react-icons/fa6";
import {IoCall} from "react-icons/io5";
import {IoMdMail} from "react-icons/io";
import {HiLibrary} from "react-icons/hi";
import {FaArrowCircleRight} from "react-icons/fa";

export default function Page() {
  return (
    <Wrapper additionalClass="font-fraunces bg-white">
      <div className="pt-8 bg-[#3149BB]">
        <h1 className="font-fraunces text-2xl text-center font-bold">PerpusYuk</h1>
        <div className="w-48 h-48 mask-image-blob bg-amber-500 mx-auto">
          <Image src="/profile.png" className="w-28 h-28 top-16 left-10"/>
        </div>
        <div className="text-center text-2xl pb-8">
          <h1>Budi Anggoro</h1>
        </div>
        <div className="custom-shape-divider-top-1731119076 bg-white">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div className="bg-white relative bottom-14 mx-12 rounded-3xl shadow-xl text-black backdrop-blur-2xl p-5">
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="flex flex-col gap-4">
            <Chip size="lg" className="text-lg"><FaAddressCard/></Chip>
            <Chip size="lg" className="text-lg"><IoCall/></Chip>
            <Chip size="lg" className="text-lg"><IoMdMail/></Chip>
            <Chip size="lg" className="text-lg"><HiLibrary/></Chip>
          </div>
          <div className="flex flex-col gap-4">
            <Chip size="lg" className="text-lg">2210631250037</Chip>
            <Chip size="lg" className="text-lg">089621232132</Chip>
            <Chip size="lg" className="text-lg">student.eed@gmail.com</Chip>
            <Chip size="lg" className="text-lg">Ilmu Pendidikan</Chip>
          </div>
        </div>
        <a href="/activity" className="-m-5 mt-5 rounded-b-3xl bg-sky-200 flex flex-row justify-center gap-2 items-center">
          <h1 className="text-2xl text-center p-2">Activity</h1>
          <FaArrowCircleRight className="text-2xl"/>
        </a>
      </div>

      <Navbar whichActive={'Profile'}/>
    </Wrapper>)
}