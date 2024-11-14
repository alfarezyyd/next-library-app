"use client"
import {Image, Input, Link} from "@nextui-org/react";
import {SearchIcon} from "@/components/icon/SearchIcon";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {IoIosArrowForward} from "react-icons/io";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Loading} from "@/components/Loading";


export default function Page() {
  const [accessToken, setAccessToken] = useState(null);
  const [popularBooks, setPopularBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState(null);
  useEffect(() => {
    setAccessToken(Cookies.get("accessToken", accessToken));
    setLoading(true);
  }, []);
  useEffect(() => {
    if (accessToken) {
      fetchPopularBooks()
      fetchAllCategories()
      triggerNotification()
    }
  }, [accessToken]);

  async function triggerNotification() {
    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}notifications`, {
        method: 'POST',
        includeCredentials: true,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  async function fetchPopularBooks() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}books`, {
        method: 'GET',
        includeCredentials: true,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      console.log(accessToken);
      const responseBody = await response.json();
      console.log(response.ok)
      if (response.ok) {
        setPopularBooks(responseBody['result']['data']);
        console.log(responseBody['result']);
      } else {
        console.log(responseBody);
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  const fetchAllCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}categories`, {
        method: 'GET',
        includeCredentials: true,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const responseBody = await response.json();
      if (response.ok) {
        setAllCategory(responseBody['result']['data']);
      } else {
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
        <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap mb-2">
          <Link href="" className="text-white relative inline-block link-active">Popular</Link>
          {
            allCategory && allCategory.map((category) => (
                <Link key={`category-${category.id}`} href={`/admin/catalog/${category.id}`}
                      className="text-white relative inline-block">{category.name}</Link>
              )
            )
          }

        </div>
      </div>
      <div className="bg-white rounded-t-3xl min-h-screen">
        <div className="flex flex-col gap-4 p-6">
          {popularBooks !== null ? popularBooks.map((item, index) => (
            <Link key={`book-${item.id}`} href={`/books/${item.id}`}>
              <div className="flex flex-row gap-4">
                <div className="bg-pink-100/40 rounded-xl p-2 backdrop-blur flex-shrink-0">
                  <Image src={"/book1.png"} className="h-28 w-28"/>
                </div>
                <div className="flex flex-col text-black gap-4 w-full">
                  <h1>{item.category.name}</h1>
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                    <IoIosArrowForward className="text-2xl"/>
                  </div>
                  <h1 className="font-light">{item.author}</h1>
                </div>
              </div>
              <hr className="-mx-6"/>
            </Link>
          )) : (
            <Loading/>
          )}

        </div>
      </div>
      <Navbar whichActive={"Home"}/>
    </Wrapper>
  );
}
