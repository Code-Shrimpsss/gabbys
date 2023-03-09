import type { NextPage } from "next";
import Header from "./Header";
import Image from "next/image";

import SearchBar from "@/assets/images/searchBar.png"
import GabbyList from "@/assets/images/gabby_list.png"
import SquareLone from "@/assets/images/chatMessage/square_lone.png"

const Square: NextPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="profile_box flex mt-0 mb-10 xl:px-64 lg:px-40 md:px-20">
        <div className="profile_left_box pt-10 w-[40%] min-h-fit px-8  rounded-xl cursor-pointer">
          <div className="profile_flxed_box fixed">
            <div className="gabby_search bg-bgsearchbar w-[100%] rounded-3xl mb-4">
              <Image src={SearchBar} alt="search bar"></Image>
            </div>
            <div className="gabby_follow_list w-full h-[600px] bg-bgsearchbar  rounded-3xl px-[24px] py-[24px]">
              <div className="gabby_follow_list_titile font-biryani not-italic text-xl font-black leading-5 text-black mb-4">
                GABBY WANTS TO FOLLOW
              </div>
              <Image src={GabbyList} alt="Gabby list" className="w-[100%]"></Image>
            </div>
          </div>
        </div>
        <div className="profile_right_box pt-10 w-[60%] min-h-fit px-12 border-l-2 border-white">
          <div className="gabby_square_bar flex w-full justify-evenly mb-4">
            <li id="chat_high_text" className="gabby_square_bar_item font-black text-2xl leading-4 ">Following</li>
            <li className="gabby_square_bar_item font-black text-xl leading-4 ">Suggested</li>
          </div>
          {/* <SquareList /> */}
          <div className="lone_box rounded-3xl">
            <Image src={SquareLone} alt="SquareLone"></Image>
          </div>
        </div>
      </div>
    </>
  )
};

export default Square;
