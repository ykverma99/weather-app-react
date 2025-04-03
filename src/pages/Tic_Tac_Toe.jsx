import React from "react";
import BoxContainer from "../components/BoxContainer";

const Tic_Tac_Toe = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-96">
        <BoxContainer />
      </div>
    </div>
  );
};

export default Tic_Tac_Toe;
