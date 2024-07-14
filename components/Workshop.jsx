import React from 'react';

const Workshop = () => {
  return (
    <article id="workshop" className="min-h-screen py-20 px-5 text-center bg-cover bg-no-repeat" style= {{backgroundImage: "url('/begron2.png')"}}>
      <h3 className="text-xl mb-3 text-white">Upcoming Workshop</h3>
      <h2 className="text-3xl font-bold mb-10 text-white">Check it on YouTube!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {[{
            title: "CS50 Daily Code Challenge",
            type: "Free",
            price: "$0.00",
            duration: "today",
            image: "/banner.jpg",
            link: "https://youtube.com/playlist?list=PLhQjrBD2T381qULidYDKP55-4u1piASC1&si=bD7CXVQPTTY8sVLm"
          }, {
            title: "101 to be Good in Learning Programming by Sandhika Galih",
            type: "Premium",
            price: "$10.00",
            duration: "tomorrow",
            image: "/banner.jpg",
            link: "https://youtube.com/playlist?list=PLhQjrBD2T3810ZX79Xrgj8X382QaWbk_J&si=xOPhYBZnZGyaRY-I"
          }, {
            title: "Code Crashes and Tips to Survive by CS Dojo",
            type: "Premium",
            price: "$10.00",
            duration: "next week",
            image: "/banner.jpg",
            link: "https://youtube.com/playlist?list=PLhQjrBD2T382xHP1dYqfF6kRqL7xBTQNJ&si=7ukqQ3NuebWY6KP1"
        }].map((workshop, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
              <div className="absolute top-0 right-0 bg-yellow-500 text-white py-1 px-2 rounded-bl-lg">
                {workshop.duration}
              </div>
            </div>
            <div className="p-5">
              <div className="bg-[#C8C0A6] text-black text-xs font-bold uppercase px-2 py-1 inline-block rounded">
                {workshop.type}
              </div>
              <h3 className="text-lg font-semibold mt-2">{workshop.title}</h3>
              <div className="mt-3 text-xl font-bold text-red-500">{workshop.price}</div>
              <a href={workshop.link} className="mt-3 inline-block bg-[#C8C0A6] text-black py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Watch Playlist
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Workshop;
