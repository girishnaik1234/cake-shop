import React, { useState } from 'react';
import BestBirthday from '../ImagesforWeb/BestBirthday.jpg'

const CakeDetailsPage = ({ cake }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(cake.sizeOptions[0]);
  const [customization, setCustomization] = useState('');

  const handleAddToCart = () => {
    // Logic to add the cake to the cart
    console.log(`Added ${quantity} ${size} ${cake.name} to cart with customization: ${customization}`);
  };

  return (
    <div className="cake-details">
      <h1>{cake.name}</h1>
      <img src={cake.imageUrl} alt={cake.name} />
      <p>{cake.description}</p>
      <h2>Ingredients:</h2>
      <ul>
        {cake.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Flavor: {cake.flavor}</h2>
      <h2>Price: ${cake.price.toFixed(2)}</h2>

      <div className="customization-options">
        <h3>Select Size:</h3>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          {cake.sizeOptions.map((sizeOption, index) => (
            <option key={index} value={sizeOption}>
              {sizeOption}
            </option>
          ))}
        </select>
      </div>

      <div className="quantity-selector">
        <h3>Quantity:</h3>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="customization-input">
        <h3>Customization:</h3>
        <input
          type="text"
          placeholder="Add any custom message or request"
          value={customization}
          onChange={(e) => setCustomization(e.target.value)}
        />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>

      <div className="customer-reviews">
        <h2>Customer Reviews:</h2>
        {cake.reviews.length > 0 ? (
          cake.reviews.map((review, index) => (
            <div key={index} className="review">
              <h4>{review.user}</h4>
              <p>Rating: {review.rating} / 5</p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default CakeDetailsPage;

// Sample cake data for testing
const sampleCake = {
  name: "Chocolate Delight",
  imageUrl: BestBirthday,
  description: "A rich and moist chocolate cake.",
  ingredients: ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Butter"],
  flavor: "Chocolate",
  price: 29.99,
  sizeOptions: ["Small", "Medium", "Large"],
  reviews: [
    { user: "Alice", rating: 5, comment: "Absolutely delicious!" },
    { user: "Bob", rating: 4, comment: "Very good, but a bit too sweet." },
  ],
};
