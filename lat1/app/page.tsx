"use client";
import Hero from "./component/hero";   
import RiwayatPekerjaan from "./component/riwayatPekerjaan";
import RiwayatPendidikan from "./component/riwayatPendidikan";
import FavColor from "./component/favColor";
import "./dir-style.css";
import PersonalInfo from "./component/PersonalInfo";
import MyGallery from "./component/MyGallery";
import ContactForm from "./component/ContactForm";
import SkillsSection from "./component/skill";
import Color from "./component/color";
import { useState } from "react";

export default function Gallery(){
  const [warna, setWarna] = useState("light"); // Menambahkan state untuk warna
  
  return (
    <section
      className={`min-h-screen p-4 transition-colors duration-300 ${
        warna === "dark"
          ? "bg-black text-white"
          : warna === "light"
          ? "bg-white text-black"
          : warna === "blue"
          ? "bg-blue-400 text-white"
          : "bg-green-300 text-gray-900"
      }`}
    >
      <Hero/>
      <PersonalInfo/>
      <MyGallery/>
      <SkillsSection/>
      <RiwayatPendidikan/>
      <RiwayatPekerjaan/>
      <FavColor/>
      <ContactForm/>
      
      {/* Berikan prop setWarna ke komponen Color */}
      <Color setWarna={setWarna} />
    </section>
  );
}
