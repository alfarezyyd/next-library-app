"use client"
import {Image} from "@nextui-org/react";
import {Input, Link} from "@nextui-org/react";
import {SearchIcon} from "@/components/icon/SearchIcon";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {IoIosArrowForward} from "react-icons/io";

export default function Page() {
  return (
    <Wrapper additionalClass={"bg-[#3149BB] font-fraunces text-white"}>
      <div className="flex flex-col gap-5 pt-10 px-8 sm:gap-5 sm:pt-10 sm:px-8">
        <h1
          className="font-fraunces text-4xl text-center font-bold sm:text-4xl sm:text-center sm:font-bold">PerpusYuk</h1>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-xs mx-auto h-10 sm:max-w-xs sm:mx-auto sm:h-10",
            mainWrapper: "h-full sm:h-full",
            input: "text-small !text-white placeholder:text-white bg-transparent sm:text-small sm:!text-white sm:placeholder:text-white sm:bg-transparent",
            inputWrapper: "h-full font-normal text-white bg-default-400/20 focus-within:!bg-default-400/20 backdrop-blur-xl sm:h-full sm:font-normal sm:text-white sm:bg-default-400/20 sm:focus-within:!bg-default-400/20 sm:backdrop-blur-xl",
          }}
          placeholder="What would you like to read..."
          size="lg"
          className="text-white placeholder-white sm:text-white sm:placeholder-white"
          startContent={<SearchIcon size={18}/>}
          type="search"
        />
        <h1 className="text-2xl font-semibold sm:text-2xl sm:font-semibold">New Collection</h1>
        <div
          className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap sm:flex-row sm:gap-2 sm:overflow-x-auto sm:whitespace-nowrap">
          <div
            className="w-36 rounded-lg shadow-lg overflow-hidden bg-blue-500/20 text-white relative flex-shrink-0 sm:w-36 sm:rounded-lg sm:shadow-lg sm:overflow-hidden sm:bg-blue-500/20 sm:text-white sm:relative sm:flex-shrink-0">
            <div className="w-36 h-32 relative z-0 sm:w-36 sm:h-32 sm:relative sm:z-0">
              <Image src={"/book1.png"}/>
            </div>
            <div className="p-4 bg-white text-black z-50 relative sm:p-4 sm:bg-white sm:text-black sm:z-50 sm:relative">
              <p className="text-sm text-gray-500 sm:text-sm sm:text-gray-500">Art</p>
              <h3 className="text-xl font-semibold sm:text-xl sm:font-semibold">Gestalt</h3>
            </div>
          </div>
          <div
            className="w-36 rounded-lg shadow-lg overflow-hidden bg-blue-500/20 text-white relative flex-shrink-0 sm:w-36 sm:rounded-lg sm:shadow-lg sm:overflow-hidden sm:bg-blue-500/20 sm:text-white sm:relative sm:flex-shrink-0">
            <div className="w-36 h-32 relative z-0 sm:w-36 sm:h-32 sm:relative sm:z-0">
              <Image src={"/book1.png"}/>
            </div>
            <div className="p-4 bg-white text-black z-50 relative sm:p-4 sm:bg-white sm:text-black sm:z-50 sm:relative">
              <p className="text-sm text-gray-500 sm:text-sm sm:text-gray-500">Art</p>
              <h3 className="text-xl font-semibold sm:text-xl sm:font-semibold">Gestalt</h3>
            </div>
          </div>
          <div
            className="w-36 rounded-lg shadow-lg overflow-hidden bg-blue-500/20 text-white relative flex-shrink-0 sm:w-36 sm:rounded-lg sm:shadow-lg sm:overflow-hidden sm:bg-blue-500/20 sm:text-white sm:relative sm:flex-shrink-0">
            <div className="w-36 h-32 relative z-0 sm:w-36 sm:h-32 sm:relative sm:z-0">
              <Image src={"/book1.png"}/>
            </div>
            <div className="p-4 bg-white text-black z-50 relative sm:p-4 sm:bg-white sm:text-black sm:z-50 sm:relative">
              <p className="text-sm text-gray-500 sm:text-sm sm:text-gray-500">Art</p>
              <h3 className="text-xl font-semibold sm:text-xl sm:font-semibold">Gestalt</h3>
            </div>
          </div>
        </div>
        <div
          className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap sm:flex-row sm:gap-4 sm:overflow-x-auto sm:whitespace-nowrap">
          <Link href=""
                className="text-white relative inline-block link-active sm:text-white sm:relative sm:inline-block sm:link-active">Popular</Link>
          <Link href=""
                className="text-white relative inline-block sm:text-white sm:relative sm:inline-block">Art</Link>
          <Link href=""
                className="text-white relative inline-block sm:text-white sm:relative sm:inline-block">Technology</Link>
          <Link href=""
                className="text-white relative inline-block sm:text-white sm:relative sm:inline-block">Technology</Link>
          <Link href=""
                className="text-white relative inline-block sm:text-white sm:relative sm:inline-block">Technology</Link>
          <Link href=""
                className="text-white relative inline-block sm:text-white sm:relative sm:inline-block">Technology</Link>
          <Link href=""
                className="text-white relative inline-block sm:text-white sm:relative sm:inline-block">Technology</Link>
          <Link href=""
                className="text-white relative inline-block sm:text-white sm:relative sm:inline-block">Technology</Link>
        </div>
      </div>
      <div className="bg-white rounded-t-3xl sm:bg-white sm:rounded-t-3xl">
        <div className="flex flex-col gap-4 p-6 sm:flex-col sm:gap-4 sm:p-6">
          <div className="flex flex-row gap-4 sm:flex-row sm:gap-4">
            <div
              className="bg-pink-100/40 rounded-xl p-2 backdrop-blur flex-shrink-0 sm:bg-pink-100/40 sm:rounded-xl sm:p-2 sm:backdrop-blur sm:flex-shrink-0">
              <Image src={"/book1.png"} className="h-28 w-28 sm:h-28 sm:w-28"/>
            </div>
            <div className="flex flex-col text-black gap-1 w-full sm:flex-col sm:text-black sm:gap-1 sm:w-full">
              <h1>Management</h1>
              <div
                className="flex flex-row justify-between items-center sm:flex-row sm:justify-between sm:items-center">
                <h1 className="text-2xl font-semibold sm:text-2xl sm:font-semibold">Show Your Work</h1>
                <IoIosArrowForward className="text-2xl sm:text-2xl"/>
              </div>
              <h1 className="font-light sm:font-light">Antonio Bonaparte</h1>
            </div>
          </div>
          <hr className="-mx-6 sm:-mx-6"/>
          <div className="flex flex-row gap-8 sm:flex-row sm:gap-8">
            <div
              className="bg-pink-100/40 rounded-xl p-2 backdrop-blur sm:bg-pink-100/40 sm:rounded-xl sm:p-2 sm:backdrop-blur">
              <Image src={"/book1.png"} className="h-28 w-28 sm:h-28 sm:w-28"/>
            </div>
            <div className="flex flex-col text-black gap-1 sm:flex-col sm:text-black sm:gap-1">
              <h1>Management</h1>
              <h1 className="text-2xl font-semibold sm:text-2xl sm:font-semibold">Show Your Work</h1>
              <h1 className="font-light sm:font-light">Antonio Bonaparte</h1>
            </div>
          </div>
          <hr className="-mx-6 sm:-mx-6"/>
          <div className="flex flex-row gap-8 sm:flex-row sm:gap-8">
            <div
              className="bg-pink-100/40 rounded-xl p-2 backdrop-blur sm:bg-pink-100/40 sm:rounded-xl sm:p-2 sm:backdrop-blur">
              <Image src={"/book1.png"} className="h-28 w-28 sm:h-28 sm:w-28"/>
            </div>
            <div className="flex flex-col text-black gap-1 sm:flex-col sm:text-black sm:gap-1">
              <h1>Management</h1>
              <h1 className="text-2xl font-semibold sm:text-2xl sm:font-semibold">Show Your Work</h1>
              <h1 className="font-light sm:font-light">Antonio Bonaparte</h1>
            </div>
          </div>
          <hr className="-mx-6 sm:-mx-6"/>
        </div>
      </div>
      <Navbar whichActive={"Home"}/>
    </Wrapper>
  )
}
