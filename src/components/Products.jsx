import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "AI Writing Pro", price: 29 },
  { id: 2, name: "Design Templates Pack", price: 49 },
  { id: 3, name: "Premium Stock Assets", price: 19 },
  { id: 4, name: "Automation Toolkit", price: 79 },
  { id: 5, name: "Resume Builder Pro", price: 15 },
  { id: 6, name: "Social Media Kit", price: 39 },
];

const Products = ({ handleAddToCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Premium Digital Tools</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;