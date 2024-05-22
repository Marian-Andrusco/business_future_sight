const HeroSection = () => {
  return (
    <div className="flex flex-col items-center heroSection mb-8">
      <h1 className="font-bold text-6xl mb-8 text-lime-400">Grow and Scale</h1>
      <div className="w-[800px] h-[450px] ">
        <iframe
          className="rounded-3xl shadow-1"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/EWPiCNL0Ai8?si=vpUvd8QQ2VBF8s7V"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HeroSection;
