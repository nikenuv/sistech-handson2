import React from "react";

const Course = () => {
  return (
    <article
      id="courses"
      className="min-h-screen bg-gray-200 py-20 px-5 text-center"
    >
      <h3 className="text-xl mb-3">Courses</h3>
      <h2 className="text-3xl font-bold mb-10">Pick A Course To Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        <div
          className="w-full md:w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken"
          style={{
            backgroundImage: "url('/course.jpg')",
          }}
        >
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat rounded-t-lg">
              Android Track
            </h2>
            <h3>
              <a
                href="https://youtube.com/playlist?list=PLhQjrBD2T381qULidYDKP55-4u1piASC1&si=bD7CXVQPTTY8sVLm"
                className="text-black font-bold hover:text-white hover:underline block"
              >
                Watch Playlist
              </a>
            </h3>
          </div>
        </div>
        <div
          className="w-full md:w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken"
          style={{
            backgroundImage: "url('/course.jpg')",
          }}
        >
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat rounded-t-lg">
              iOS Track
            </h2>
            <h3>
              <a
                href="https://youtube.com/playlist?list=PLhQjrBD2T3810ZX79Xrgj8X382QaWbk_J&si=xOPhYBZnZGyaRY-I"
                className="text-black font-bold hover:text-white hover:underline block"
              >
                Watch Playlist
              </a>
            </h3>
          </div>
        </div>
        <div
          className="w-full md:w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken"
          style={{
            backgroundImage: "url('/course.jpg')",
          }}
        >
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat rounded-t-lg">
              Web Track
            </h2>
            <h3>
              <a
                href="https://youtube.com/playlist?list=PLhQjrBD2T382xHP1dYqfF6kRqL7xBTQNJ&si=7ukqQ3NuebWY6KP1"
                className="text-black font-bold hover:text-white hover:underline block"
              >
                Watch Playlist
              </a>
            </h3>
          </div>
        </div>
        <div
          className="w-full md:w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken"
          style={{
            backgroundImage: "url('/course.jpg')",
          }}
        >
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat rounded-t-lg">
              Data Science
            </h2>
            <h3>
              <a
                href="https://youtube.com/playlist?list=PLhQjrBD2T381qULidYDKP55-4u1piASC1&si=bD7CXVQPTTY8sVLm"
                className="text-black font-bold hover:text-white hover:underline block"
              >
                Watch Playlist
              </a>
            </h3>
          </div>
        </div>
        <div
          className="w-full md:w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken"
          style={{
            backgroundImage: "url('/course.jpg')",
          }}
        >
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat rounded-t-lg">
              Machine Learning
            </h2>
            <h3>
              <a
                href="https://youtube.com/playlist?list=PLhQjrBD2T3810ZX79Xrgj8X382QaWbk_J&si=xOPhYBZnZGyaRY-I"
                className="text-black font-bold hover:text-white hover:underline block"
              >
                Watch Playlist
              </a>
            </h3>
          </div>
        </div>
        <div
          className="w-full md:w-60 h-60 mx-auto bg-cover bg-center rounded-lg shadow-md bg-blend-darken"
          style={{
            backgroundImage: "url('/course.jpg')",
          }}
        >
          <div className="p-4">
            <h2 className="py-4 mt-16 text-center text-2xl font-bold mb-3 bg-[#C8C0A6] bg-cover bg-no-repeat rounded-t-lg">
              Games Track
            </h2>
            <h3>
              <a
                href="https://youtube.com/playlist?list=PLhQjrBD2T382xHP1dYqfF6kRqL7xBTQNJ&si=7ukqQ3NuebWY6KP1"
                className="text-black font-bold hover:text-white hover:underline block"
              >
                Watch Playlist
              </a>
            </h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Course;
