export default function Wrapper({children, additionalClass}) {
  return (
    <div className="bg-zinc-100/95 fixed top-0 left-0 w-full h-full min-h-screen">
      <div className={`max-w-[480px] mx-auto h-full shadow-md backdrop-blur-2xl ${additionalClass}`}>
        <div className="h-full sm:h-auto overflow-y-scroll sm:overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}