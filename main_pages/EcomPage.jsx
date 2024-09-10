import MainSideBar from "@/components/MainSideBar"

const EcomPage = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex w-1/5 h-full">
        <MainSideBar page={'ecom'}/>
      </div>
    </div>
  )
}

export default EcomPage
