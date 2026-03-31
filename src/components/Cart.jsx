const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border rounded p-4 shadow sticky top-4">
      <h2 className="text-xl font-bold text-center mb-2">
        Premium Digital Tools
      </h2>

      <p className="text-center text-sm text-gray-500 mb-3">
        Your Cart
      </p>

      {/* Cart Items */}
      <div className="space-y-2">
        {cart.length === 0 && (
          <p className="text-center text-gray-400">No items added</p>
        )}

        {cart.map(item => (
          <div key={item.id} className="flex justify-between border-b pb-1">
            <span>{item.name}</span>
            <span className="text-red-500 font-bold">✕</span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <progress 
          className="progress progress-primary w-full" 
          value={cart.length * 20} 
          max="100">
        </progress>
        <p className="text-right text-sm">{cart.length}/5</p>
      </div>

      {/* Total */}
      <div className="mt-4 font-bold flex justify-between">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      {/* Button */}
      <button className="btn btn-primary w-full mt-3">
        Complete Purchase
      </button>
    </div>
  );
};

export default Cart;