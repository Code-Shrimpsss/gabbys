import type { NextPage } from "next";
import Header from "./Header";
import profileOption from "@/assets/images/profile_option.png";
import profileGabby from "../../assets/images/profile_gabby.png";
import Image from "next/image";
import { useRouter } from "next/router"

const Profile: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="profile_box flex mt-10 layout_box xl:px-64 lg:px-40 md:px-20">
        <div className="profile_left_box w-[40%] min-h-fit px-8 pt-10 rounded-xl cursor-pointer">
          <Image src={profileGabby} alt="horse" onClick={() => router.push({ pathname: "square" })} />
        </div>
        <div className="profile_right_box w-[60%] min-h-fit px-12 pt-10  border-l-2 border-white">
          <div className="bg_option bg-bgtrsion px-6 pt-4 rounded-3xl flex justify-center">
            <Image src={profileOption} alt="horse" className="w-[90%]" />
          </div>
        </div>
      </div>
    </>
  )
};

export default Profile;
