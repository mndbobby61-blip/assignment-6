import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "AI Writing Pro", price: 29 },
  { id: 2, name: "Design Templates Pack", price: 49 },
  { id: 3, name: "Premium Stock Assets", price: 19 },
  { id: 4, name: "Automation Toolkit", price: 79 },
  { id: 5, name: "Resume Builder Pro", price: 15 },
  { id: 6, name: "Social Media Kit", price: 39 },
];

const Products = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Premium Digital Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;