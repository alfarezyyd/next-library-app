"use client"
import {Chip, Image} from "@nextui-org/react";
import Wrapper from "@/components/Wrapper";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {CommonUtil} from "@/helper/CommonUtil";
import {useRouter} from "next/navigation";
import {MdModeEditOutline} from "react-icons/md";
import {FaAddressCard} from "react-icons/fa6";
import {FaArrowCircleRight, FaBookOpen} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import {IoCall} from "react-icons/io5";
import {IoMdMail} from "react-icons/io";
import {HiLibrary} from "react-icons/hi";

export default function Page() {
  const [accessToken, setAccessToken] = useState();
  const [loading, setLoading] = useState(false);
  const [userInformation, setUserInformation] = useState();
  const [decodedToken, setDecodedToken] = useState();
  const {push} = useRouter();
  useEffect(() => {
    setAccessToken(Cookies.get('accessToken'));
  }, []);

  useEffect(() => {
    if (accessToken) {
      fetchExistingProfile()
      setDecodedToken(CommonUtil.parseJwt(accessToken));
    }
  }, [accessToken]);

  const fetchExistingProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}informations`, {
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

        setUserInformation(responseBody['result']['data']);
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {

  }, [userInformation]);
  return (
    <Wrapper additionalClass="font-fraunces bg-white text-white">
      <div className="pt-8 bg-[#3149BB]">
        <h1 className="font-fraunces text-2xl text-center font-bold">PerpusYuk</h1>
        <div className="w-48 h-48 mask-image-blob bg-amber-500 mx-auto">
          <Image
            src={`${userInformation?.profilePath === undefined || userInformation?.profilePath === null ? (
              `/profile.png`
            ) : (
              `${process.env.NEXT_PUBLIC_STORAGE_URL}/information-resources/${userInformation?.profilePath}`
            )}`}
            className="w-32 h-32 top-14 left-10"/>
        </div>
        <div className="text-center pb-8 flex flex-row justify-center gap-3 relative">
          <h1 className="text-2xl">{decodedToken?.fullName}</h1>
          <button
            className="absolute left-[17rem]  md:left-80 bottom-10 p-1 bg-white text-xl text-black rounded-full hover:text-blue-700"
            onClick={() => {
              push('/profile/manage');
            }}>
            <MdModeEditOutline/>
          </button>
        </div>
        <div className="custom-shape-divider-top-1731119076 bg-white">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div
        className="bg-white relative bottom-14 mx-8 md:mx-12 rounded-3xl shadow-xl text-black backdrop-blur-2xl p-5 mb-28 md:mb-0">
        <div className="flex flex-col justify-start items-start gap-2 lg:gap-4">
          <div className="flex flex-row gap-4">
            <Chip color={"primary"} size="lg" className="text-md lg:text-lg self-center"><FaAddressCard/></Chip>
            <Chip size="lg" className="text-md lg:text-lg break-words">{userInformation?.identificationNumber}</Chip>
          </div>
          <div className="flex flex-row gap-4">
            <Chip color={"primary"} size="lg" className="text-md lg:text-lg"><IoCall/></Chip>
            <Chip size="lg" className="text-md lg:text-lg break-words">{userInformation?.telephone}</Chip>
          </div>
          <div className="flex flex-row gap-4">
            <Chip color={"primary"} size="lg" className="text-md lg:text-lg"><IoMdMail/></Chip>
            <Chip size="lg" className="text-md lg:text-lg break-words">{decodedToken?.email}</Chip>
          </div>
          <div className="flex flex-row gap-4">
            <Chip color={"primary"} size="lg" className="text-md lg:text-lg self-center"><HiLibrary/></Chip>
            <Chip size="lg" className="text-md lg:text-lg whitespace-normal break-words h-fit flex-wrap">
              {userInformation?.faculty}</Chip>
          </div>
          <div className="flex flex-row gap-4">
            <Chip color={"primary"} size="lg" className="text-md lg:text-lg"><FaBookOpen/></Chip>
            <Chip size="lg" className="text-md lg:text-lg break-words">{userInformation?.studyProgram}</Chip>
          </div>
        </div>
        <a href="/activity"
           className="-m-5 mt-5 rounded-b-3xl bg-sky-200 flex flex-row justify-center gap-2 items-center">
          <h1 className="text-2xl text-center p-2">Activity</h1>
          <FaArrowCircleRight className="text-xl"/>
        </a>
      </div>


      <Navbar whichActive={'Profile'}/>
    </Wrapper>)
}