import Gif from "../Images/gifff.gif";

export default function App() {
  return (
    <div className="flex h-[500px] md:h-screen px-5 md:p-5 pt-10">
      <div
        className="flex-1 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png')",
        }}
      >
        <div className="bg-black bg-opacity-60 h-full  justify-center md:h-auto p-5 sm:px-2 md:p-10 sm:rounded-none md:rounded-xl text-center max-w-3xl">
          <img
            src={Gif}
            alt="gif"
            className="w-40 sm:w-80 md:w-96 lg:w-[500px] mx-auto mb-4"
          />

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">
            Welcome to my Website
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-400 mb-4">
            Ashwath S
          </h2>

         
          <p className="text-sm sm:text-base md:text-lg text-gray-400  mt-4">
            Scroll down to know more about me, my skills, and the projects I’ve built.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 ">
            Keep scrolling to explore my journey and connect with me.
          </p>
        </div>
      </div>
    </div>
  );
}
