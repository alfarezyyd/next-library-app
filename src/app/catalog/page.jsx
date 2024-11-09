"use client"
import {Image} from "@nextui-org/react";
import {Button, Card, CardBody, CardFooter, Input, Link} from "@nextui-org/react";
import {SearchIcon} from "@/components/icon/SearchIcon";

export default function Page() {
  return (
    <div className="h-screen bg-[#3149BB] font-fraunces">
      <div className="flex flex-col gap-5 pt-10 px-8  ">
        <h1 className="font-fraunces text-4xl text-center font-bold">PerpusYuk</h1>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small placeholder:text-white bg-transparent",
            inputWrapper: "h-full font-normal text-white bg-default-400/20 focus-within:!bg-default-400/20 backdrop-blur-xl",
          }}
          placeholder="What whould like to read..."
          size="lg"
          className="text-white placeholder-white"
          startContent={<SearchIcon size={18}/>}
          type="search"
        />
        <h1 className="text-2xl font-semibold">New Collection</h1>
        <div className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap">
          <div className="w-36 rounded-lg shadow-lg overflow-hidden bg-blue-500/20 text-white relative flex-shrink-0">
            <div className="w-36 h-32 relative z-0">
              <Image src={"/book1.png"}/>
            </div>
            <div className="p-4 bg-white text-black z-50 relative">
              <p className="text-sm text-gray-500">Art</p>
              <h3 className="text-xl font-semibold">Gestalt</h3>
            </div>
          </div>
          <div className="w-36 rounded-lg shadow-lg overflow-hidden bg-blue-500/20 text-white relative flex-shrink-0">
            <div className="w-36 h-32 relative z-0">
              <Image src={"/book1.png"}/>
            </div>
            <div className="p-4 bg-white text-black z-50 relative">
              <p className="text-sm text-gray-500">Art</p>
              <h3 className="text-xl font-semibold">Gestalt</h3>
            </div>
          </div>
          <div className="w-36 rounded-lg shadow-lg overflow-hidden bg-blue-500/20 text-white relative flex-shrink-0">
            <div className="w-36 h-32 relative z-0">
              <Image src={"/book1.png"}/>
            </div>
            <div className="p-4 bg-white text-black z-50 relative">
              <p className="text-sm text-gray-500">Art</p>
              <h3 className="text-xl font-semibold">Gestalt</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap">
          <Link href="" className="text-white relative inline-block link-active">
            Popular
          </Link>
          <Link href="" className="text-white relative inline-block ">
            Art
          </Link>
          <Link href="" className="text-white relative inline-block ">
            Technology
          </Link>
          <Link href="" className="text-white relative inline-block ">
            Technology
          </Link>
          <Link href="" className="text-white relative inline-block ">
            Technology
          </Link>
          <Link href="" className="text-white relative inline-block ">
            Technology
          </Link>
          <Link href="" className="text-white relative inline-block ">
            Technology
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-t-3xl ">
        <div className="flex flex-col gap-4 p-6">
          <div className="flex flex-row gap-8">
            <div className="bg-pink-100/40 rounded-xl p-2 backdrop-blur">
              <Image src={"/book1.png"} className="h-28 w-28"/>
            </div>
            <div className="flex flex-col text-black gap-1">
              <h1>Management</h1>
              <h1 className="text-2xl font-semibold">Show Your Work</h1>
              <h1 className="font-light">Antonio Bonaparte</h1>
            </div>
          </div>
          <hr className="-mx-6"/>
          <div className="flex flex-row gap-8">
            <div className="bg-pink-100/40 rounded-xl p-2 backdrop-blur">
              <Image src={"/book1.png"} className="h-28 w-28"/>
            </div>
            <div className="flex flex-col text-black gap-1">
              <h1>Management</h1>
              <h1 className="text-2xl font-semibold">Show Your Work</h1>
              <h1 className="font-light">Antonio Bonaparte</h1>
            </div>
          </div>
          <hr className="-mx-6"/>
          <div className="flex flex-row gap-8">
            <div className="bg-pink-100/40 rounded-xl p-2 backdrop-blur">
              <Image src={"/book1.png"} className="h-28 w-28"/>
            </div>
            <div className="flex flex-col text-black gap-1">
              <h1>Management</h1>
              <h1 className="text-2xl font-semibold">Show Your Work</h1>
              <h1 className="font-light">Antonio Bonaparte</h1>
            </div>
          </div>
          <hr className="-mx-6"/>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-around items-center rounded-t-xl">
        <div className="flex flex-col items-center text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7m-9 2v10m4 0V9m5 3v10m-4-3h5v4H6v-4h5M5 21h14v-4h-3M4 6v4h2m-2 0h10"/>
          </svg>
          <span className="text-xs font-semibold">Home</span>
        </div>

        <div className="flex flex-col items-center text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 8V6c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v14a1 1 0 01-1 1h-7c-.55 0-1-.45-1-1v-2M3 5h1a2 2 0 012 2v11a2 2 0 01-2 2H3"/>
          </svg>
        </div>

        <div className="flex flex-col items-center text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l1-5H8.4M5 17h14M6 21h12m-3.5-4h-5m2 1.5a.5.5 0 10-1 0 .5.5 0 001 0zm6.5 1.5h-12"/>
          </svg>
        </div>

        <div className="flex flex-col items-center text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M14.8 16a5 5 0 10-5.6 0m1.6-4.8c0 2.6 2.2 4.8 4.8 4.8s4.8-2.2 4.8-4.8S19 6.4 16.4 6.4c-2.6 0-4.8 2.2-4.8 4.8m5.6 5.6v2.8H5.6v-2.8h11.2z"/>
          </svg>
        </div>
      </div>

    </div>
  )
}