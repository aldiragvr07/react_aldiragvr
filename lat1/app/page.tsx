import Hero from "./component/hero";   
import RiwayatPekerjaan from "./component/riwayatPekerjaan";
import RiwayatPendidikan from "./component/riwayatPendidikan";
import FavColor from "./component/favColor";
import "./dir-style.css";

export default function Gallery(){
  return(
    <section>
    <Hero/>
    <RiwayatPendidikan/>
    <RiwayatPekerjaan/>
    <FavColor/>
    </section>
  );
}