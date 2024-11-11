import {Chip, Image} from "@nextui-org/react";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";

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
      <div className="bg-white relative bottom-14 mx-12 rounded-3xl shadow-xl text-black backdrop-blur-2xl">
        <div className="p-5 flex flex-col gap-4 justify-center items-center">
          <Chip size="lg">2210631250037</Chip>
          <Chip size="lg">2210631250037</Chip>
          <Chip size="lg">2210631250037</Chip>
        </div>
      </div>
      <Navbar whichActive={'Profile'}/>
    </Wrapper>)
}