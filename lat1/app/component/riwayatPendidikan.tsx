export default function RiwayatPendidikan(){
    return(
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="font-bold text-2x1">Riwayat Pendidikan</h2>
        <RowRiwayat jenjang="SD" sekolah="SDN 04 CICALENGKA" tahun="2011-2016"/>
        <RowRiwayat jenjang="SMP" sekolah="SMP FK BINA MUDA CICALENGKA" tahun="2016-2019"/>
        <RowRiwayat jenjang="SMK" sekolah="SMK BAKTI NUSANTARA 666" tahun="2019-2022"/>
        <RowRiwayat jenjang="Kuliah" sekolah="MA`SOEM UNIVERSITY" tahun="2022-Sekarang"/>
      </div>
    );
}
interface RowRiwayatProps{
    jenjang: string;
    sekolah: string;
    tahun: string;
  }
  function RowRiwayat(props: RowRiwayatProps){
    return(
  
    <div className="border-2 border-indigo-700/70 rounded-lg bg-grey-600 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cois-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
        </div>
      </div>
    </div>
  
    );
  }