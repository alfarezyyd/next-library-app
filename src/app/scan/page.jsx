"use client"
import {useEffect, useState} from "react";
import {Html5QrcodeScanner} from "html5-qrcode";
import Cookies from "js-cookie";
import Wrapper from "@/components/Wrapper";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Page() {
  const [accessToken, setAccessToken] = useState();
  const [loading, setLoading] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {width: 250, height: 250},
      fps: 5
    });

    const initializeScanner = () => {
      // Check if the 'reader' div exists
      const readerElement = document.getElementById('reader');
      if (readerElement) {
        scanner.render(success, error);
      }
    };

    initializeScanner(); // Initialize the scanner once the component is mounted

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.log(err);
    }

    return () => {
      scanner.clear(); // Clean up the scanner when the component unmounts
    };
  }, []);

  useEffect(() => {
    setAccessToken(Cookies.get("accessToken"));
  }, []);

  return (
    <Wrapper additionalClass={"font-fraunces bg-[#3149BB]"}>
      <div className="pt-8 flex flex-col gap-2 items-center pb-4">
        <div className="bg-white bg-opacity-10 text-white px-4 py-2 rounded-full text-lg inline backdrop-blur-3xl">
          QR Code
        </div>
        <h1 className="font-fraunces text-3xl text-center font-bold text-white">Scan QR Code</h1>
      </div>
      <div className="mt-5 bg-white mx-8 rounded-2xl h-96 p-5">
        {scanResult ? (
          <div className={"text-black text-center text-2xl align-middle flex flex-col justify-center h-full"}>
            <h1>Klik <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/books/${scanResult}`} className={"text-blue-600"}>
              Link Berikut
            </Link></h1>
          </div>
        ) : (
          <div id="reader" className="text-black h-full rounded-2xl flex flex-col items-center p-5"></div>
        )}
      </div>
      <Navbar whichActive={"Scan"}/>
    </Wrapper>
  );
}
