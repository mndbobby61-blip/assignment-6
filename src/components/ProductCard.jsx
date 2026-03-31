const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>

      <button
        onClick={() => handleAddToCart(product)}
        className="btn btn-primary w-full mt-3"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;