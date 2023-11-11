import React from "react";
import { ViewRedux } from "../../../assets/components/redux/ViewRedux";
import { ButtonRedux } from "../../../assets/components/redux/ButtonRedux";

export const Redux = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded shadow-md">
        <br />
        <ViewRedux />
        <br />
        <ButtonRedux />
      </div>
    </div>
  );
};

// untuk menampilkan viewredux dan button redux biar ga lempar lemparan terlalu jauh
