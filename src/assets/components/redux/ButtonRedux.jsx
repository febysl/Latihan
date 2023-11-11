import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {gantiBrand, kurangBedak, kurangiMakeUp, tambahBedak, tambahiMakeUp } from "../../../redux/action/kotakMakeUp";

export const ButtonRedux = () => {
  // digunakan untuk menjalankan manipulasi data
  const dispatch = useDispatch();
  const [Tambah, setTambah] = useState("");
  

  // handle button tambah list bedak
  const addBedak = () => {
    if (Tambah) {
      dispatch(tambahBedak(Tambah));
      setTambah("");
    }
  };
  return (
    <div className="flex flex-col gap-2 ">
      <span>Ganti nama brand?</span>
      <div className="flex gap-2">
        {/* jika kita akan mengganti nama brand maka kita menjalankan manipulasi data dari ganti brand */}
        <input
          className="border rounded"
          placeholder="Masukkan nama brand"
          onChange={(e) => {
            dispatch(
              gantiBrand({
                namaBrand: e.target.value,
                Penerbit: "Sedang dicari",
              })
            );
          }}
        ></input>
        <div className="flex gap-2">
          <button
            className="bg-gradient-to-r from-violet-200 to-pink-200 text-white p-2 rounded"
            onClick={() => {
              dispatch(tambahiMakeUp());
            }}
          >
            +
          </button>
          <span className="flex justify-center items-center">
            Jumlah make up{" "}
          </span>
          <button
            className="bg-gradient-to-r from-violet-200 to-pink-200 p-2 text-white  rounded font-bold"
            onClick={() => {
              dispatch(kurangiMakeUp());
            }}
          >
            -
          </button>
        </div>
      </div>
      <span>Apakah anda ingin menambah list bedak? </span>
      <div className="flex gap-2 ">
        {/* inputan untuk menambah list bedak menggunakan manipulasi variable setTambah */}
        <input
          className="border rounded"
          placeholder="Masukkan nama bedak"
          value={Tambah}
          onChange={(e) => {
            setTambah(e.target.value);
          }}
        ></input>
        <div className="flex gap-2">
          <button
            className="bg-gradient-to-r from-violet-200 to-pink-200 text-white  p-2 rounded"
            onClick={addBedak}
          >
            Tambah
          </button>
          <button
            className="bg-gradient-to-r from-violet-200 to-pink-200 text-white  p-2 rounded"
            onClick={() => {
              dispatch(kurangBedak());
            }}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};
