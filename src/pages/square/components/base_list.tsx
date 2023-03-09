import type { NextComponentType } from "next";
import Image from "next/image";

import gabbyAvatar from "@/assets/images/gabby_avatar.png";
import HeartSolidIcon from "@/assets/svgs/Heart_Solid_Icon.svg";

// square image 
import OnePic from "@/assets/images/onePic.png";
// import twoPic from "@/assets/images/twoPic.png";
// import threePic from "@/assets/images/threePic.png";

import ForkOption from "./forkOption";
import SquareOrderItem from "./SquareOrderItem";

interface SquereData {
  type: string,
  avatar_name: string,
  avatar_id: string,
  document: string,
  images: string[],
  order_list: SquareOrderData[]
}

interface SquareOrderData {
  order_avatar_name: string
  order_avatar_id: string
  order_document: string
}

type Props = {
  //声明props的数据类型
  value: SquereData;
}

const SquareItem: NextComponentType<Props> = (props) => {
  const data = props.value;

  return (
    <>
      <div className="bg_option bg-bgsearchbar px-2 py-3 rounded-3xl flex justify-center">
        <div className="square_list_avatar w-[20%]">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <Image src={gabbyAvatar} alt="gabbyAvatar"></Image>
            </div>
          </div>
        </div>
        <div className="square_list_detail">
          <div className="the_squere_detail pb-4">
            <div className="like_icon text-uncommontext text-sm mb-2">
              <Image src={HeartSolidIcon} alt="search bar" className="base_icon"></Image>
              <i>Gabby#0901 liked</i>
            </div>
            <div className="avatar_name flex items-center mb-2">
              <strong className="avatar_name_title mr-4">{data.avatar_name}</strong>
              <i>{data.avatar_id}</i>
            </div>
            <div className="square_message_document mb-2">
              {data.document}
            </div>
            <div className="square_message_images_list mb-2">
              {data.images.length === 0 ? "" : data.images.map((item) =>
                <Image src={item} alt="picture" className="w-[30%]"></Image>
              )}
            </div>
            <div className="square_fork_option_box">
              <ForkOption />
            </div>
          </div>
          <div className="order_squere_detail w-full">
            {data.order_list.map((item) => {
              <SquareOrderItem order_value={item} />
            })}
          </div>
        </div>
      </div>
    </>
  )
};

export default SquareItem;
