import React from 'react';
import Image from 'next/image';

// Import gambar hobi
import readingImage from '../reading.jpg';
import nontonImage from '../nonton.jpg';
import jonggingImage from '../jogging.jpg';
import gamingImage from '../gaming.jpg';

// Object Hobbies dengan atribut name, description, dan image
const Hobbies = [
  {
    name: "Reading",
    description: "Membaca berbagai macam buku untuk menambah wawasan.",
    image: readingImage,
  },
  {
    name: "Menonton Film",
    description: "Menonton film sebagai hiburan dan sumber inspirasi.",
    image: nontonImage,
  },
  {
    name: "Jogging",
    description: "Berolahraga untuk menjaga kesehatan dan kebugaran.",
    image: jonggingImage,
  },
  {
    name: "Gaming",
    description: "Bermain game sebagai hiburan dan menambah keterampilan strategi.",
    image: gamingImage,
  },
];

const MyGallery = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Hobbie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <Image
              src={hobby.image}
              alt={hobby.name}
              className="object-cover"
              width={500} // lebar gambar
              height={200} // tinggi gambar
              layout="responsive" // membuat gambar responsif
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{hobby.name}</h3>
              <p className="text-gray-600 text-sm">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;
