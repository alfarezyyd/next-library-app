"use client"
import {Image, Input, Link} from "@nextui-org/react";
import {SearchIcon} from "@/components/icon/SearchIcon";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {IoIosArrowForward} from "react-icons/io";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";


export default function Page() {
  const [accessToken, setAccessToken] = useState(null);
  const [popularBooks, setPopularBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setAccessToken(Cookies.get("accessToken", accessToken));
  }, []);
  useEffect(() => {
    if (!accessToken) {
      fetchPopularBooks()
    }
  }, [accessToken]);

  async function fetchPopularBooks() {
    console.log(accessToken);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}books`, {
        method: 'GET',
        includeCredentials: true,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const responseBody = await response.json();
      if (response.ok) {
        setPopularBooks(responseBody['result']['data']);
        console.log(responseBody['result']);
      } else {
        console.log(responseBody);
        const errorMessages = {};
        responseBody.errors.message.forEach((error) => {
          errorMessages[error.path[0]] = error.message;
        });
        setUserError(errorMessages)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper additionalClass={"bg-[#3149BB] font-fraunces text-white"}>
      <div className="flex flex-col gap-5 pt-10 px-8">
        <h1 className="font-fraunces text-4xl text-center font-bold">PerpusYuk</h1>
        <Input
          classNames={{
            base: "max-w-full mx-auto h-10",
            mainWrapper: "h-full",
            input: "text-small !text-white placeholder:text-white bg-transparent",
            inputWrapper: "h-full font-normal text-white bg-default-400/20 focus-within:!bg-default-400/20 backdrop-blur-xl",
          }}
          placeholder="What would you like to read..."
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
          <Link href="" className="text-white relative inline-block link-active">Popular</Link>
          <Link href="" className="text-white relative inline-block">Art</Link>
          <Link href="" className="text-white relative inline-block">Technology</Link>
          <Link href="" className="text-white relative inline-block">Technology</Link>
          <Link href="" className="text-white relative inline-block">Technology</Link>
          <Link href="" className="text-white relative inline-block">Technology</Link>
          <Link href="" className="text-white relative inline-block">Technology</Link>
          <Link href="" className="text-white relative inline-block">Technology</Link>
        </div>
      </div>
      <div className="bg-white rounded-t-3xl">
        <div className="flex flex-col gap-4 p-6">
          <div className="flex flex-row gap-4">
            <div className="bg-pink-100/40 rounded-xl p-2 backdrop-blur flex-shrink-0">
              <Image src={"/book1.png"} className="h-28 w-28"/>
            </div>
            <div className="flex flex-col text-black gap-1 w-full">
              <h1>Management</h1>
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-semibold">Show Your Work</h1>
                <IoIosArrowForward className="text-2xl"/>
              </div>
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
      <Navbar whichActive={"Home"}/>
    </Wrapper>
  );
}
