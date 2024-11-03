import React from 'react';

const MyInfos = {
  TTL: "Jakarta, 1 Januari 1990",
  Gender: "Laki-laki",
  TinggiBadan: "175 cm",
  BeratBadan: "70 kg",
  StatusPernikahan: "Belum Menikah",
  Whatsapp: "+628123456789",
  Email: "example@example.com"
};

const PersonalInfo = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Informasi Pribadi</h2>
      <ul className="space-y-3">
        {Object.entries(MyInfos).map(([key, value]) => (
          <li key={key} className="flex items-center justify-between border-b pb-2 text-gray-700">
            <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1')}:</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;
