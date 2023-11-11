import React from "react";
import { useSelector } from "react-redux";

export const ViewRedux = () => {
  // menggunakan useSelector untuk mengambil data
  const data = useSelector((state) => state.makeUp);
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-200 to-pink-200 rounded">
        <h1 className="flex justify-center items-center font-serif text-white">
          KOTAK MAKE UP
        </h1>
      </div>
      <br />
      <h1>Jumlah Make Up : {data.jumlahmakeup}</h1>
      <h1>Nama Brand : {data.namaBrand}</h1>
      <h1>Penerbit : {data.Penerbit}</h1>
      <h1>Bedak : </h1>
      <ul>
        {data.listBedak.map((bedak) => (
          <li>- {bedak}</li>
        ))}
      </ul>
    </div>
  );
};
