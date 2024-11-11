import {Avatar, Chip, Divider, Image} from "@nextui-org/react";
import {FaCheckCircle, FaExclamation, FaExclamationCircle, FaTimesCircle} from "react-icons/fa";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
      <div className="pt-8 flex flex-col gap-2 items-center pb-4">
        <div className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-full text-lg inline backdrop-blur-3xl">
          Notifications
        </div>
        <h1 className="font-fraunces text-3xl text-center font-bold text-white">Manage Notifications</h1>
      </div>
      <div className="h-screen bg-zinc-200 p-5">
        <div className="flex flex-row bg-white text-black p-5 rounded-xl shadow-md">
          <div className="w-2/12 mr-5">
            <div className="flex flex-col items-center">
              <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d"/>
              <p className="text-sm mt-2">Thursday</p>
              <p className="text-sm">11.45</p>

            </div>
          </div>
          <div className="w-1/12">
            <Divider orientation="vertical"/>
          </div>
          <div className="9/12">
            <div className="flex flex-col justify-start items-start">
              <h1 className="font-semibold">ADawdwadw</h1>
              <h1 className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ea!</h1>
            </div>
          </div>
        </div>
      </div>
      <Navbar whichActive={'Notification'}/>
    </Wrapper>
  )
}