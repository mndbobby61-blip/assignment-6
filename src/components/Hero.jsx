const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 items-center p-10">
      
      <div>
        <h1 className="text-4xl font-bold">
          Supercharge Your Digital Workflow
        </h1>
        <p className="py-4 text-gray-500">
          Access premium AI tools, design assets, templates and productivity software.
        </p>

        <button className="btn btn-primary mr-2">Explore Products</button>
        <button className="btn btn-outline">Watch Demo</button>
      </div>

      <img
        src="https://i.ibb.co/6y0hW7p/ai.jpg"
        alt="hero"
        className="rounded"
      />
    </div>
  );
};

export default Hero;