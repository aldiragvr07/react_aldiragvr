"use client";
import { FC } from "react";

interface ColorProps {
  setWarna: (warna: string) => void;
}

const Color: FC<ColorProps> = ({ setWarna }) => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Pilih Tema Warna</h1>
      <div className="flex justify-center space-x-4">
        <button
          className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
          onClick={() => setWarna("light")}
        >
          Light
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
          onClick={() => setWarna("dark")}
        >
          Dark
        </button>
        <button
          className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
          onClick={() => setWarna("blue")}
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default Color;
