"use client"
import Image from "next/image";
import {Button, Divider} from "@nextui-org/react";
import Link from "next/link"
import {FaGoogle} from "react-icons/fa";
import Wrapper from "@/components/Wrapper";
import {useState} from "react";
import {FaAddressCard} from "react-icons/fa6";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (<Wrapper additionalClass="bg-sky-200">
    <div className="bg-white py-7">
      <Image src="/logo.png" width={200} height={200} alt="Logo" className="mx-auto w-36 md:w-64"/>
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
    <div className="flex flex-col justify-center items-center gap-4 font-montserrat">
      <h1 className="pt-4 text-blue-900 text-3xl text-center font-bold">
        Perpusyuk!
      </h1>
      <p className="text-blue-900 text-sm text-center px-16 md:text-lg">
        Baca dan pinjam buku dari kampus dengan mudah dan cepat!
      </p>
      <div className="mt-2 flex flex-col gap-6">
        <Button as={Link} href={"/auth/login"}
                className="w-64 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 "
                color="primary" size="lg">
          Login
        </Button>
        <Button as={Link} href={"/auth/register"} color="primary" className="w-64 rounded-full" variant="bordered"
                size="lg">
          Register
        </Button>
      </div>
      <div className="flex flex-row justify-center items-center  gap-4 text-blue-900">
        <Divider orientation={"horizontal"} className="w-screen h-2 bg-white"/>
        <p className="text-xl font-bold">or</p>
        <Divider orientation={"horizontal"} className="w-screen h-2 bg-white"/>
      </div>
    </div>
    <div className="mt-4 flex flex-col justify-around font-montserrat mx-16 gap-4">
      <Button radius="sm" startContent={<FaGoogle/>} variant="ghost" color="primary" as={Link}
              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}authentication/google`}>
        Login with Google
      </Button>

    </div>
  </Wrapper>)
}
