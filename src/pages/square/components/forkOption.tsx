import type { NextComponentType } from "next";
import Image from "next/image";

import CommentStrokeIcon from "@/assets/svgs/Comment_Stroke_Icon.svg"
import ShareStrokeIcon from "@/assets/svgs/Share_Stroke_Icon.svg"
import HeartStrokeIcon from "@/assets/svgs/Heart_Stroke_Icon.svg"
import RetweetStrokeIcon from "@/assets/svgs/Retweet_Stroke_Icon.svg"

const ForkOption: NextComponentType = () => {
  return (
    <>
      <div className="flex justify-start">
        <div className="w-16 option_like"><Image className="base_icon" src={CommentStrokeIcon} alt="search bar"></Image><i>3</i></div>
        <div className="w-16 option_like"><Image className="base_icon" src={RetweetStrokeIcon} alt="search bar"></Image><i>23</i></div>
        <div className="w-16 option_like"><Image className="base_icon" src={HeartStrokeIcon} alt="search bar"></Image><i>66</i></div>
        <div className="w-16 option_header"><Image className="base_icon" src={ShareStrokeIcon} alt="search bar"></Image><i>2</i></div>
      </div>
    </>
  )
};

export default ForkOption;
