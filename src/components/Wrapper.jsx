export default function Wrapper({children, additionalClass}) {
  return (
    <div className="bg-zinc-100/95 fixed top-0 left-0 w-full h-full min-h-screen overflow-hidden">
      <div className={`max-w-[480px] mx-auto h-full shadow-md backdrop-blur-2xl ${additionalClass}`}>
        <div className="h-full overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  )
}