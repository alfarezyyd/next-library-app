"use client"
import {Divider, Image, Input, Link} from "@nextui-org/react";
import {SearchIcon} from "@/components/icon/SearchIcon";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {IoIosArrowForward} from "react-icons/io";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {useParams} from "next/navigation";
import {Loading} from "@/components/Loading";


export default function Page() {
  const [accessToken, setAccessToken] = useState(null);
  const [categorizeBooks, setCategorizeBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const routerParam = useParams();
  useEffect(() => {
    setAccessToken(Cookies.get("accessToken", accessToken));
    setLoading(true);
  }, []);

  useEffect(() => {
    if (accessToken && routerParam.categoryId) {
      setActiveCategory(routerParam.categoryId);
      fetchPopularBooks(routerParam.categoryId);
      fetchAllCategories()

    }
  }, [accessToken, routerParam.categoryId]);

  async function fetchPopularBooks(categoryId) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}books/categories/${categoryId}`, {
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
        setCategorizeBooks(responseBody['result']['data']);
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
        console.log(responseBody['result']['data']);
        setAllCategory(responseBody['result']['data']);
        setActiveCategory(responseBody['result']['data'].find(category => category.id === routerParam.categoryId));
        console.log(responseBody['result']['data'].find(category => category.id === routerParam.categoryId))
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
        <div className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap mb-2">
          <Link href=""
                className={`text-white relative inline-block ${routerParam.categoryId === "popular" ? 'link-active' : ''}`}>Popular</Link>
          {
            allCategory && allCategory.map((category) => (
                <Link key={`category-${category.id}`} href={`/admin/catalog/${category.id}`}
                      className={`text-white relative inline-block ${category.id === activeCategory?.id ? 'link-active' : ''}`}>{category.name}</Link>
              )
            )
          }

        </div>
      </div>
      <div className="bg-white rounded-t-3xl min-h-screen">
        <div className="flex flex-col gap-4 p-6">
          <Input
            placeholder="What would you like to read..."
            size="lg"
            className="text-black"
            startContent={<SearchIcon size={18}/>}
            type="search"
          />
          {categorizeBooks !== null ? categorizeBooks.map((item, index) => (
            <div key={`book-${item.id}`}>
              <Link href={`/books/${item.id}`}>
                <div className="flex flex-row gap-4">
                  <div className="bg-pink-100/40 rounded-xl p-2 backdrop-blur flex-shrink-0">
                    <Image src={"/book1.png"} className="h-28 w-28"/>
                  </div>
                  <div className="flex flex-col text-black gap-4 w-full">
                    <h1>{activeCategory.name}</h1>
                    <div className="flex flex-row justify-between items-center">
                      <h1 className="text-2xl font-semibold">{item.title}</h1>
                      <IoIosArrowForward className="text-2xl"/>
                    </div>
                    <h1 className="font-light">{item.author}</h1>
                  </div>
                </div>
              </Link>
              <Divider orientation={"horizontal"} className="w-screen -mx-6 mt-1"/>
            </div>
          )) : (
            <Loading/>
          )}

        </div>
      </div>
      <Navbar whichActive={"Home"}/>
    </Wrapper>
  );
}
