"use client"
import {Html5QrcodeScanner} from "html5-qrcode";
import {useEffect, useState} from "react";

export default function Page() {
  const [scanResult, setScanResult] = useState(null);


  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5
    })
    scanner.render(success, error)

    function success(result) {
      scanner.clear()
      setScanResult(result)
    }

    function error() {
      console.log(error)
    }
  })

  return (
    <div>
      <h1>Test QR</h1>
      <div id={"reader"}></div>
    </div>
  )
}