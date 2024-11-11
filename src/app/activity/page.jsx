import {Avatar, Chip, Divider, Image} from "@nextui-org/react";
import {FaCheckCircle, FaExclamation, FaExclamationCircle, FaTimesCircle} from "react-icons/fa";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
      <div className="pt-8">
        <div className="mx-8">
          <h6 className="text-xl font-semibold">May 5, 2024</h6>
          <h1 className="text-4xl font-bold">Activity</h1>
          <div className="flex flex-row justify-between mt-3">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg">Mon</h1>
              <p className="text-md">4</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg">Mon</h1>
              <p className="text-md">4</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg">Mon</h1>
              <p className="text-md">4</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg">Mon</h1>
              <p className="text-md">4</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg">Mon</h1>
              <p className="text-md">4</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-lg">Mon</h1>
              <p className="text-md">4</p>
            </div>
          </div>
          <Divider orientation={"vertical"} className="w-0.5 h-full bg-white absolute left-1/2"/>

          <div className="flex flex-col text-gray-50 mt-5">
            <div className="flex md:contents">
              <div className="bg-green-500 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <div className="flex flex-row items-center relative">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Package Booked</h3>
                    <p className="leading-tight text-justify w-full">
                      21 July 2021
                    </p>
                  </div>
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-blue-500 rounded-full shadow text-center h-8 w-8 flex items-center justify-center">
                    <FaCheckCircle className="text-white"/>
                  </div>
                  <div className="ml-auto">09</div>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="flex md:contents">*/}
          {/*  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">*/}
          {/*    <div className="h-full w-6 flex items-center justify-center">*/}
          {/*      <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>*/}
          {/*    </div>*/}
          {/*    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">*/}
          {/*      <FaExclamationCircle className="text-white relative top-1 left-1"/>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">*/}
          {/*    <h3 className="font-semibold text-lg mb-1 text-gray-400">Delivered</h3>*/}
          {/*    <p className="leading-tight text-justify">*/}

          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>
      </div>
      <Navbar whichActive={'Activity'}/>
    </Wrapper>
  )
}