const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1 text-xl font-bold text-purple-600">
        DigiTools
      </div>

      <div className="flex gap-4">
        <a>Products</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>Testimonials</a>
        <a>FAQ</a>
      </div>

      <button className="btn btn-primary ml-4">Get Started</button>
    </div>
  );
};

export default Navbar;