

export default function App() {

  return (
    <div className="flex h-80 md:h-screen p-5">
      <div
        className="flex-1 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Ashwath S</h1>
          <h1 className="text-5xl font-bold text-white mb-4">WellCome to my Portfolio</h1>
          <br></br>
          <p className="text-base text-gray-300">Hi, I am Ashwath S, currently studying in Computer science 
            Engineering at S D M Institute of technology ujire.</p>
            <p className="text-base text-gray-300">I am intrested in frontend development.I build web interfaces.</p>
        </div>
      </div>
    </div>
  );
}
