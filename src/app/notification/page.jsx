"use client"
import {Avatar, Divider} from "@nextui-org/react";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

export default function Page() {
  const [accessToken, setAccessToken] = useState(null);
  const [allNotification, setAllNotification] = useState([]);
  const [loading, setLoading] = useState(true);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, [])
  useEffect(() => {
    if (accessToken) {
      fetchUserNotification()
    }
  }, [accessToken]);
  const fetchUserNotification = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}notifications`, {
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
        setAllNotification(responseBody['result']['data']);
      } else {
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
      <div className="pt-8 flex flex-col gap-2 items-center pb-4">
        <div className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-full text-lg inline backdrop-blur-3xl">
          Notifications
        </div>
        <h1 className="font-fraunces text-3xl text-center font-bold text-white">Manage Notifications</h1>
      </div>
      <div className="h-screen bg-zinc-200 p-5">
        <div className="flex flex-col gap-5">
          {allNotification.length > 0 ? (
            allNotification.map((notification) => (
              <div className="flex flex-row bg-white text-black p-5 rounded-xl shadow-md"
                   key={`notification-${notification.id}`}>
                <div className="w-2/12 mr-5 my-auto">
                  <div className="flex flex-col items-center">
                    <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d"/>
                    <p className="text-sm mt-2">{days[(new Date(notification.sendAt)).getUTCDay()]}</p>
                    <p
                      className="text-sm">{`${(new Date(notification.sendAt)).getUTCHours()}.${(new Date(notification.sendAt)).getUTCMinutes()}`}</p>
                  </div>
                </div>
                <div className="w-1/12">
                  <Divider orientation="vertical"/>
                </div>
                <div className="9/12">
                  <div className="flex flex-col justify-start items-start">
                    <h1 className="font-semibold">{notification.headerMessage}</h1>
                    <h1 className="text-sm">
                      {notification.message}
                    </h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>No notifications available</h1>
          )}
        </div>
      </div>
      <Navbar whichActive={'Notification'}/>
    </Wrapper>
  )
}