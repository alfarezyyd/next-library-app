"use client"
import Wrapper from "@/components/Wrapper";
import {Button, Divider, Image} from "@nextui-org/react";
import {BsFillStarFill} from "react-icons/bs";
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Loading} from "@/components/Loading";
import {MdRestartAlt} from "react-icons/md";

export default function Page() {
  const routerParam = useParams();
  const [accessToken, setAccessToken] = useState(null);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleToggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };
  const {push} = useRouter();
  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, [])

  useEffect(() => {
    if (routerParam.bookId && accessToken) {
      fetchRequestedBook(routerParam.bookId);
    }
  }, [routerParam, accessToken]);

  async function fetchRequestedBook(id) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}books/${id}`, {
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
        setBook(responseBody['result']['data']);
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

  async function triggerBorrow() {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}loans`, {
        method: 'POST',
        includeCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          bookId: book.id,
          loanDate: new Date().toISOString(),
        }),
      });

      const responseBody = await response.json();
      if (response.ok) {
        push('/admin/books')
      } else {
        console.log(responseBody);
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }

  }

  return (!loading ? (
        <Wrapper additionalClass={"bg-[#3149BB] font-fraunces"}>
          <div className="flex flex-col items-center gap-5 pt-10 px-8">
            <h1 className="text-3xl text-center font-bold">Book Details</h1>
          </div>
          <div className="mt-12 relative flex flex-col items-center">
            {/* Gambar buku */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Image
                src={
                  showQRCode ? `${process.env.NEXT_PUBLIC_BACKEND_URL}public/assets/qr-code/${book?.qrCodePath}.png` : `${process.env.NEXT_PUBLIC_BACKEND_URL}public/assets/books-resources/${book?.imagePath}`
                }
                alt="Book Image"
                className="w-52 h-52 p-3 bg-gradient-to-bl from-blue-600 via-sky-300 to-sky-50 shadow-2xl backdrop-blur-2xl"
              />

              {/* Tombol Change di pojok kanan atas */}
              <Button isIconOnly onClick={handleToggleQRCode}
                      className="absolute -top-5 -right-5 bg-blue-500 text-white text-2xl rounded-full shadow-md hover:bg-blue-700 transition duration-300 z-10"
              >
                <MdRestartAlt/>
              </Button>
            </div>
            <div
              className="bg-white flex flex-col mt-24 items-center rounded-t-3xl text-gray-600 pt-36 px-10 pb-10 w-full max-w-xs md:max-w-md md:min-h-screen">
              <div className="text-center flex flex-col gap-4 items-center">
                <h1 className="text-3xl font-bold">{book?.title}</h1>
                <h2 className="text-xl font-semibold text-gray-500">{book?.author}</h2>
                <div className="flex flex-row text-2xl text-amber-600 gap-5">
                  <BsFillStarFill/>
                  <BsFillStarFill/>
                  <BsFillStarFill/>
                  <BsFillStarFill/>
                </div>
              </div>
              <div className="flex flex-row justify-around gap-4 mt-5">
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="text-2xl font-semibold">{book?.pagesAmount}</h1>
                  <h1 className="text-lg">Page</h1>
                </div>
                <Divider orientation="vertical" className="h-16"/>
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="text-2xl font-semibold">English</h1>
                  <h1 className="text-lg">Language</h1>
                </div>
                <Divider orientation="vertical" className="h-16"/>
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="text-2xl font-semibold">{book?.publicationYear}</h1>
                  <h1 className="text-lg">Release</h1>
                </div>
              </div>

              <div className="mt-5">
                {book?.description}
              </div>
              <button className="bg-green-400 rounded-2xl text-white p-5 mt-5 w-full" onClick={triggerBorrow}>
                <h1 className="tracking-widest text-xl text-center font-semibold">BORROW</h1>
              </button>
            </div>
          </div>
        </Wrapper>) :
      (
        <Loading/>
      )
  )
    ;
}
