import type { NextComponentType } from "next";
import Image from "next/image";

import SquareItem from "./SquareItem"
import SquareData from "@/mocks/square_data.json"

const SquareList: NextComponentType = () => {
  return (
    <>
      <div className="bg_option bg-bgsearchbar px-6 pt-4 rounded-3xl ">
        {SquareData.map((item) => <SquareItem value={item} />)}
      </div>
    </>
  )
};

export default SquareList;
