import React from 'react';
import './HomePage.css'; // Importing CSS for styling
import CakeCategories from './CakeCategories'; // Importing CakeCategories
import BestBirthday from '../ImagesforWeb/BestBirthday.jpg';
import vanillac from '../ImagesforWeb/vanillac.jpg';
import redvelvet from '../ImagesforWeb/redvelvet.jpg';
import ShoppingCart from './ShoppingCart';


const HomePage = () => {
    const featuredCakes = [
        {
            id: 1,
            name: 'Chocolate Delight',
            image: BestBirthday,
            description: 'Rich and moist chocolate cake topped with creamy chocolate frosting.',
        },
        {
            id: 2,
            name: 'Vanilla Dream',
            image: vanillac,
            description: 'Light and fluffy vanilla cake with a hint of almond flavor.',
        },
        {
            id: 3,
            name: 'Red Velvet',
            image: redvelvet,
            description: 'Classic red velvet cake with cream cheese frosting.',
        },
    ];

    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Welcome to Our Cake Shop!</h1>
                <p>Indulge in our delicious cakes made with love.</p>
            </header>
            <section className="featured-cakes">
                <h2>Featured Cakes</h2>
                <div className="cake-list">
                    {featuredCakes.map(cake => (
                        <div key={cake.id} className="cake-item">
                            <img src={cake.image} alt={cake.name} className="cake-image" />
                            <h3>{cake.name}</h3>
                            <p>{cake.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <CakeCategories /> {/* Render CakeCategories */}
            {/* You can add a link or button to navigate to CakeDetailsPage if needed */}
        </div>
    );
};

export default HomePage;