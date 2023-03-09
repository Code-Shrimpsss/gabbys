import type { NextComponentType } from "next";
import Image from "next/image";

import gabbyAvatar from "@/assets/images/gabby_avatar.png";
import HeartSolidIcon from "@/assets/svgs/Heart_Solid_Icon.svg";

import ForkOption from "./forkOption";

interface SquareOrderData {
  order_avatar_name: string
  order_avatar_id: string
  order_document: string
}

type Props = {
  order_value: SquareOrderData
}

const SquareOrderItem: NextComponentType<{}, {}, Props> = (props) => {
  const data = props.order_value;
  console.log("orderdata", data);

  return (
    <>
      <div className="bg_option py-1 bg-bgsearchbar rounded-3xl flex justify-start">
        <div className="square_list_avatar mr-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <Image src={gabbyAvatar} alt="gabbyAvatar"></Image>
            </div>
          </div>
          <div className="order_line w-0.5 h-14 bg-gray-300 mx-auto">
          </div>
        </div>
        <div className="square_list_detail ">
          <div className="the_squere_detail">
            {/* <div className="like_icon text-uncommontext text-sm mb-2">
              <Image src={HeartSolidIcon} alt="search bar" className="base_icon"></Image>
            </div> */}
            <div className="avatar_name flex items-center mb-2">
              <strong className="avatar_name_title mr-4">{data.order_avatar_name}</strong>
              <i>{data.order_avatar_id}</i>
            </div>
            <div className="square_message_document mb-2">
              {data.order_document}
            </div>
            <div className="square_fork_option_box">
              <ForkOption />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default SquareOrderItem;
