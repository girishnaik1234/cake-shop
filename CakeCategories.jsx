// src/components/CakeCategories.jsx
import React, { useState } from 'react';
import './CakeCategories.css';
import BestBirthday from '../ImagesforWeb/BestBirthday.jpg'
import customcake from '../ImagesforWeb/download (1).jpeg'

// Sample data for cake categories
const categories = [
    {
        id: 1,
        name: 'Chocolate Cakes',
        image: BestBirthday, // Update with the correct path
        description: 'Indulge in our rich and decadent chocolate cakes.',
        cakes: [
            { id: 1, name: 'Dark Chocolate Cake', price: 25 },
            { id: 2, name: 'Milk Chocolate Cake', price: 20 },
        ],
    },
    {
        id: 2,
        name: 'Fruit Cakes',
        image: 'path/to/fruit-cake.jpg', 
        description: 'Enjoy our fresh and fruity cake options.',
        cakes: [
            { id: 3, name: 'Strawberry Shortcake', price: 22 },
            { id: 4, name: 'Mango Mousse Cake', price: 24 },
        ],
    },
    {
        id: 3,
        name: 'Custom Cakes',
        image: customcake, 
        description: 'Create your own unique cake tailored to your needs.',
        cakes: [
            { id: 5, name: 'Wedding Cake', price: 100 },
            { id: 6, name: 'Birthday Cake', price: 80 },
        ],
    },
];

const CakeCategories = () => {
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    // Filter cakes based on the search input
    const filteredCakes = categories.map(category => ({
        ...category,
        cakes: category.cakes.filter(cake => cake.name.toLowerCase().includes(filter.toLowerCase())),
    }));

    // Sort cakes based on the selected order
    const sortCakes = (cakes) => {
        return cakes.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    };

    return (
        <div className="cake-categories">
            <h2>Our Cake Categories</h2>
            <input
                type="text"
                placeholder="Filter cakes..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
                <option value="asc">Sort by Price: Low to High</option>
                <option value="desc">Sort by Price: High to Low</option>
            </select>

            <div className="categories">
                {filteredCakes.map(category => (
                    <div className="cake-category" key={category.id}>
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                        <ul>
                            {sortCakes(category.cakes).map(cake => (
                                <li key={cake.id}>
                                    {cake.name} - ${cake.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CakeCategories;