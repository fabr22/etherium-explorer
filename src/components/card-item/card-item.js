import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({
  numberOfBlock,
  timeStamp,
  blockMiner,
  blockReward,
  checkDetails,
}) => {
  const heandlerCheckDetails = (numberOfBlock) => {
    return () => {
      checkDetails(numberOfBlock);
    };
  };
  return (
    <div className="flex border-b p-3 hover:cursor-pointer">
      <div className="flex w-5/12">
        <div className="flex bg-slate-200 rounded-md mr-3 p-3">BK</div>
        <div className="mr-3 ">
          <div>
            {" "}
            <span className="font-bold"> Number of block: </span>{" "}
            <Link to="details">
              <span onClick={heandlerCheckDetails(numberOfBlock)}>
                {" "}
                {numberOfBlock}{" "}
              </span>{" "}
            </Link>{" "}
          </div>
          <div>
            {" "}
            <span className="font-bold"> Timestamp: </span> {timeStamp}
          </div>
        </div>
      </div>
      <div className="flex w-7/12">
        <div>
          <div className="flex">
            {" "}
            <span className="font-bold"> Blockminer: </span> {blockMiner}
          </div>
          <div>
            <span className="font-bold"> Blockreward: </span> {blockReward}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
