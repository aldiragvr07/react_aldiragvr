import foto from "../foto.jpeg";

export default function Hero(){
    return(
      
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-500 font-bold">CV ONLINE</h1>
          <h1 className="text-3xl"> Aldira Givari</h1>
        <Profile/>
          <p>
            Holla Saya adalah seorang mahasiswa semester 5 yang berkeinginan menjadi seorang programer dan saya juga ingin masuk surga
          </p>
        </div>
    );
}

function Profile(){
    return<img src={foto.src} alt="aldiragvr" className="fotoku"/>
}