import Wrapper from "@/components/Wrapper";
import {Divider, Image, Link} from "@nextui-org/react";
import {BsFillStarFill} from "react-icons/bs";

export default function Page() {
  return (
    <Wrapper additionalClass={"bg-[#3149BB] font-fraunces"}>
      <div className="flex flex-col items-center gap-5 pt-10 px-8">
        <h1 className="text-3xl text-center font-bold">Book Details</h1>
      </div>
      <div className="mt-8 relative flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src={"/book1.png"}
            className="w-52 h-52 p-3 bg-gradient-to-bl from-blue-600 via-sky-300 to-sky-50 bottom-20 shadow-2xl backdrop-blur-2xl top-3"
          />
        </div>
        <div
          className="bg-white flex flex-col mt-24 items-center rounded-t-3xl text-gray-600 pt-36 px-10 pb-10 w-full max-w-md ">
          <div className="text-center flex flex-col gap-4 items-center">
            <h1 className="text-3xl font-bold">Be a Copywriter</h1>
            <h2 className="text-xl font-semibold text-gray-500">Yusuf Alghazali</h2>
            <div className="flex flex-row text-2xl text-amber-600 gap-5">
              <BsFillStarFill/>
              <BsFillStarFill/>
              <BsFillStarFill/>
              <BsFillStarFill/>
            </div>
          </div>
          <div className="flex flex-row justify-around gap-4 mt-5">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl font-semibold">130</h1>
              <h1 className="text-lg">Page</h1>
            </div>
            <Divider orientation="vertical" className="h-16"/>
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl font-semibold">English</h1>
              <h1 className="text-lg">Language</h1>
            </div>
            <Divider orientation="vertical" className="h-16"/>
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl font-semibold">2018</h1>
              <h1 className="text-lg">Release</h1>
            </div>
          </div>
          <div className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae dicta ea enim harum non placeat,
            recusandae unde. Earum ipsam minima molestiae odit quas quis temporibus unde. Aperiam, doloremque, fugiat?
          </div>
          <button className="bg-green-400 rounded-2xl text-white p-5 mt-5 w-full">
            <h1 className="tracking-widest text-xl text-center font-semibold">BORROW</h1>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
