"use client"
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io";
import {Loading} from "@/components/Loading";
import {Image, Input} from "@nextui-org/react";
import {SearchIcon} from "@/components/icon/SearchIcon";

export default function Page() {
  const [accessToken, setAccessToken] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [searchedBooks, setSearchedBooks] = useState([]);
  const {push} = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    setAccessToken(Cookies.get("accessToken", accessToken));
  }, [])

  useEffect(() => {
    if (accessToken) {
      fetchSearchData()
    }
  }, [accessToken]);

  useEffect(() => {
  }, [searchedBooks])

  useEffect(() => {
    if (accessToken) {
      fetchSearchData()
    }
  }, [search])

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);

    // Clear previous timeout if any
    if (debounceTimeout) clearTimeout(debounceTimeout);

    // Set new timeout
    setDebounceTimeout(
      setTimeout(() => {
        if (e.target.value) {
          push(`/search?search=${e.target.value}`);
        }
      }, 500) // Delay in milliseconds
    );
  };
  useEffect(() => {
    // Ambil URL query parameter "search"
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");

    // Set ke state
    if (searchParam) {
      setSearch(searchParam);
    }
  }, []);

  const fetchSearchData = async () => {
    console.log(search);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}books?search=${search}`, {
        method: 'GET',
        includeCredentials: true,
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const responseBody = await response.json();
      console.log(response.ok)
      if (response.ok) {
        setSearchedBooks(responseBody['result']['data']);
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

  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, []);

  return (
    <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
      <div className="pt-8 flex flex-col gap-2 items-center pb-4 px-12 md:px-24">
        <div className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-full text-lg inline backdrop-blur-3xl">
          Search Book
        </div>
        <h1 className="font-fraunces text-3xl text-center font-bold text-white">{search}</h1>
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
          onChange={handleChange}
        />
      </div>
      <div className="mt-5 bg-white rounded-t-3xl p-5">
        <div className="flex flex-col gap-4">
          {searchedBooks !== null ? searchedBooks.map((item, index) => (
            <Link key={`book-${item.id}`} href={`/books/${item.id}`}>
              <div className="flex flex-row gap-4 mb-2">
                <div className="bg-pink-100/40 rounded-xl p-2 backdrop-blur flex-shrink-0">
                  <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}public/assets/books-resources/${item.imagePath}`}
                         className="h-28 w-28"/>
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
