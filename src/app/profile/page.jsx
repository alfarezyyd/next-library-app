import {Chip, Image} from "@nextui-org/react";

export default function Page() {
  return (
    <div className="h-screen font-fraunces bg-white absolute">
      <div className="pt-8 bg-[#3149BB]">
        <h1 className="font-fraunces text-2xl text-center font-bold">PerpusYuk</h1>
        <div className="w-48 h-48 mask-image-blob bg-amber-500 mx-auto">
          <Image src="/profile.png" className="w-28 h-28 top-16 left-10"/>
        </div>
        <div className="text-center text-2xl pb-8">
          <h1>Budi Anggoro</h1>
        </div>
        <div className="custom-shape-divider-top-1731119076 bg-white">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div className="bg-white relative bottom-14 mx-12 rounded-3xl shadow-xl text-black backdrop-blur-2xl">
        <div className="p-5 flex flex-col gap-4 justify-center items-center">
          <Chip size="lg">2210631250037</Chip>
          <Chip size="lg">2210631250037</Chip>
          <Chip size="lg">2210631250037</Chip>
        </div>
      </div>
      <div
        className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-around items-center rounded-t-xl">
        <div className="flex flex-col items-center text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7m-9 2v10m4 0V9m5 3v10m-4-3h5v4H6v-4h5M5 21h14v-4h-3M4 6v4h2m-2 0h10"/>
          </svg>
          <span className="text-xs font-semibold">Home</span>
        </div>

        <div className="flex flex-col items-center text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 8V6c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v14a1 1 0 01-1 1h-7c-.55 0-1-.45-1-1v-2M3 5h1a2 2 0 012 2v11a2 2 0 01-2 2H3"/>
          </svg>
        </div>

        <div className="flex flex-col items-center text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l1-5H8.4M5 17h14M6 21h12m-3.5-4h-5m2 1.5a.5.5 0 10-1 0 .5.5 0 001 0zm6.5 1.5h-12"/>
          </svg>
        </div>

        <div className="flex flex-col items-center text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M14.8 16a5 5 0 10-5.6 0m1.6-4.8c0 2.6 2.2 4.8 4.8 4.8s4.8-2.2 4.8-4.8S19 6.4 16.4 6.4c-2.6 0-4.8 2.2-4.8 4.8m5.6 5.6v2.8H5.6v-2.8h11.2z"/>
          </svg>
        </div>
      </div>

    </div>)
}