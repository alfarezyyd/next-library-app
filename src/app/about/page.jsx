"use client"
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {useEffect, useState} from "react";
import {CommonUtil} from "@/helper/CommonUtil";
import Cookies from "js-cookie";
import {FaBook, FaList, FaUser} from "react-icons/fa";
import {FaCircleInfo} from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  const [accessToken, setAccessToken] = useState("");
  const [decodedToken, setDecodedToken] = useState();
  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, []);

  useEffect(() => {
    if (accessToken !== "") {
      const decodedToken =
        CommonUtil.parseJwt(accessToken);
      setDecodedToken(decodedToken);
    }
  }, [accessToken]);

  return (
    <Wrapper additionalClass={"bg-sky-200"}>
      <div className="bg-white pt-4">
        <Image src="/logo.png" width={150} height={150} alt="Logo" className="mx-auto"/>
      </div>
      <div className="custom-shape-divider-top-1731070628">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25" className="shape-fill"></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5" className="shape-fill"></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"></path>
        </svg>
      </div>
      {decodedToken?.role === "MEMBER1" && (
        <div className="flex flex-col justify-center items-center bg-sky-200 gap-4 p-4 mt-4">
          <h1 className="text-black font-acorn font-semibold tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eaque et fugit impedit iste officia placeat,
            quae quisquam vel voluptatum.
          </h1>
          <h1 className="text-black font-acorn font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis deleniti harum possimus quos! Ab,
            atque
            beatae debitis dicta harum, hic impedit magni necessitatibus nesciunt possimus quidem ullam. Cupiditate,
            laboriosam.
          </h1>
        </div>
      )}
      <div className={"px-12 font-fraunces mt-3"}>
        {decodedToken?.role === "MEMBER" && (
          <div className="flex flex-col gap-4">
            <div className="relative bg-white p-5 shadow-xl rounded-3xl overflow-hidden group">
              <Link href={"/admin/books/"}>
                <div className="flex flex-row gap-5 items-center  relative z-10">
                  <div
                    className="p-2 rounded-full  transition duration-300 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">
                    <FaBook/>
                  </div>
                  <h1 className="text-xl text-blue-600 group-hover:text-white">Manage Book</h1>
                </div>
              </Link>
              {/* Pseudo-element menggunakan Tailwind utility classes */}
              <div
                className="absolute inset-0 bg-blue-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 z-0"></div>
            </div>
            <div className="relative bg-white p-5 shadow-xl rounded-3xl overflow-hidden group">
              <div className="flex flex-row gap-5 items-center  relative z-10">
                <div
                  className="p-2 rounded-full  transition duration-300 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">
                  <FaUser/>
                </div>
                <h1 className="text-xl text-blue-600 group-hover:text-white">Manage Loan</h1>
              </div>
              {/* Pseudo-element menggunakan Tailwind utility classes */}
              <div
                className="absolute inset-0 bg-blue-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 z-0"></div>
            </div>

            <div className="relative bg-white p-5 shadow-xl rounded-3xl overflow-hidden group">
              <div className="flex flex-row gap-5 items-center  relative z-10">
                <div
                  className="p-2 rounded-full  transition duration-300 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">
                  <FaList/>
                </div>
                <h1 className="text-xl text-blue-600 group-hover:text-white">Manage Category</h1>
              </div>
              {/* Pseudo-element menggunakan Tailwind utility classes */}
              <div
                className="absolute inset-0 bg-blue-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 z-0"></div>
            </div>
            <div className="relative bg-white p-5 shadow-xl rounded-3xl overflow-hidden group">
              <div className="flex flex-row gap-5 items-center  relative z-10">
                <div
                  className="p-2 rounded-full  transition duration-300 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">
                  <FaCircleInfo/>
                </div>
                <h1 className="text-xl text-blue-600 group-hover:text-white">Tentang Aplikasi</h1>
              </div>
              {/* Pseudo-element menggunakan Tailwind utility classes */}
              <div
                className="absolute inset-0 bg-blue-600 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 z-0"></div>
            </div>


          </div>
        )}
      </div>
      <Navbar whichActive={"About"}/>
    </Wrapper>
  )
}
