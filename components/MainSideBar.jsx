import { IoIosLogOut, IoIosPeople } from "react-icons/io";
import { GiPostStamp } from "react-icons/gi";
import { MdAccountBalance, MdSettings } from "react-icons/md";
import Link from "next/link";
const MainSideBar = ({page}) => {
  return (
    <div className="flex flex-col items-start justify-between w-full h-full border-r border-black bg-[#FBE9D0]">
      <div className="flex flex-col w-full">
        <span className="text-4xl border-b border-black w-full font-bold p-4 flex items-center justify-center">The Philatelix</span>
        <div className="flex flex-col items-center justify-start mt-10 gap-4">
            <Link href={'/home/community'} className="flex w-full items-center">
                <span className={`flex items-center w-full p-2 text-2xl gap-3 ${page==='comun'?'bg-white':'opacity-70'}`}><IoIosPeople className="text-3xl"/>Community</span>
            </Link>
            <Link href={'/home/ecom'} className="flex w-full items-center">
                <span className={`flex items-center w-full p-2 text-2xl gap-3 ${page==='ecom'?'bg-white':'opacity-70'}`}><GiPostStamp className="text-3xl"/>Buy Materials</span>
            </Link>
            <Link href={'/home/npda'} className="flex w-full items-center">
                <span className={`flex items-center w-full p-2 text-2xl gap-3 ${page==='npd'?'bg-white':'opacity-70'}`}><MdAccountBalance className="text-3xl"/>NPD Account</span>
            </Link>
            <Link href={'/home/my-profile'} className="flex w-full items-center">
                <span className={`flex items-center w-full p-2 text-2xl gap-3 ${page==='prof'?'bg-white':'opacity-70'}`}><MdSettings className="text-3xl"/>Profile</span>
            </Link>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center px-2 py-4 gap-3">
        <button className="flex items-center gap-3 text-2xl p-2 bg-white rounded-full w-full justify-center border border-black"><IoIosLogOut className="text-3xl"/>Logout</button>
        <span>welcome to philatelix community! 🎉😍</span>
      </div>
    </div>
  )
}

export default MainSideBar
