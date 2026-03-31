const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="navbar-start flex-1 text-xl font-bold text-purple-600">
        DigiTools
      </div>

      <div className="navbar-center hidden md:flex gap-4 items-center px-1">
        <a>Products</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>Testimonials</a>
        <a>FAQ</a>
      </div>

      <div className="navbar-end gap-5">
        <img src="/src/assets/products/shopping-cart.png" alt="" /> Login
      <button className="btn btn-primary ml-4 rounded-full bg-purple-700 hover:bg-purple-700">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;