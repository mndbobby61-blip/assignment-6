const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.price}</p>

        <ul className="text-sm text-gray-500">
          <li>✔ Premium features</li>
          <li>✔ Lifetime access</li>
        </ul>

        <button className="btn btn-primary mt-2">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;