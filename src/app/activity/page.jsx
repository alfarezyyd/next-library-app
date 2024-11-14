"use client"
import {Divider} from "@nextui-org/react";
import {FaCheckCircle} from "react-icons/fa";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

export default function Page() {
  const [dates, setDates] = useState([]);
  const [accessToken, setAccessToken] = useState();
  const [loading, setLoading] = useState(false);
  const [allActivity, setAllActivity] = useState();
  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, []);

  useEffect(() => {
    fetchAllActivityByUser()
  }, [accessToken]);

  const fetchAllActivityByUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}users`, {
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

        setAllActivity(responseBody['result']['data']);
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    const currentDate = new Date();
    const tempDates = [];

    // Tambahkan 3 hari sebelumnya
    for (let i = 3; i > 0; i--) {
      const prevDate = new Date(currentDate);
      prevDate.setDate(currentDate.getDate() - i);
      tempDates.push({day: prevDate.toLocaleDateString('en-US', {weekday: 'short'}), date: prevDate.getDate()});
    }

    // Tambahkan hari ini di tengah
    tempDates.push({
      day: currentDate.toLocaleDateString('en-US', {weekday: 'short'}),
      date: currentDate.getDate(),
      isToday: true
    });

    // Tambahkan 3 hari ke depan
    for (let i = 1; i <= 3; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      tempDates.push({day: nextDate.toLocaleDateString('en-US', {weekday: 'short'}), date: nextDate.getDate()});
    }

    setDates(tempDates);
  }, []);
  return (
    <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
      <div className="pt-8">
        <div className="mx-8">
          <h6 className="text-xl font-semibold">May 5, 2024</h6>
          <h1 className="text-4xl font-bold">Activity</h1>
          <div
            className="flex flex-row justify-center gap-x-2 mt-3 bg-white p-4 text-[#3149BB] rounded-2xl font-semibold shadow-md backdrop-blur-2xl">
            {dates.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-2 ${item.isToday ? 'text-red-500' : ''}`} // highlight hari ini
              >
                <h1 className="text-lg md:text-xl">{item.day}</h1>
                <p className="text-md md:text-lg">{item.date}</p>
              </div>
            ))}
          </div>
          <Divider orientation={"vertical"} className="w-1 h-full bg-white absolute left-1/2"/>
          <div className="flex flex-col text-gray-50 mt-5">
            {allActivity && allActivity.map((item, index) => (
                <div className="flex md:contents" key={`activity-${index}`}>
                  <div className="bg-green-500 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                    <div className="flex flex-row items-center relative">
                      <div>
                        <h3 className="font-semibold text-sm mb-1 lg:text-xl">{item.loanStatus}</h3>
                        <p className="leading-tight text-justify w-full text-sm lg:text-lg">
                          {item.createdAt.substring(0, 10)}
                        </p>
                      </div>
                      <div
                        className="absolute left-1/2 transform ml-0.5 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-blue-500 rounded-full shadow text-center h-8 w-8 flex items-center justify-center">
                        <FaCheckCircle className="text-white"/>
                      </div>
                      <div className="justify-end lg:text-xl px-24 md:px-36">
                        <h1>{item.book.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
            }
          </div>

          {/*<div className="flex md:contents">*/}
          {/*  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">*/}
          {/*    <div className="h-full w-6 flex items-center justify-center">*/}
          {/*      <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>*/}
          {/*    </div>*/}
          {/*    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">*/}
          {/*      <FaExclamationCircle className="text-white relative top-1 left-1"/>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">*/}
          {/*    <h3 className="font-semibold text-lg mb-1 text-gray-400">Delivered</h3>*/}
          {/*    <p className="leading-tight text-justify">*/}

          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>
      </div>
      <Navbar whichActive={'Profile'}/>
    </Wrapper>
  )
}