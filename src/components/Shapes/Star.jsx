import React, { useState } from 'react';

export default function StarBiscuit() {
    // Define the ingredients and their costs
    const ingredients = [
        { name: 'Flour', amount: '100g', cost: '0.50' },
        { name: 'Sugar', amount: '80g', cost: '0.25' },
        { name: 'Oil', amount: '50g', cost: '1.25' },
        { name: 'Chocolate Chips', amount: '30g', cost: '1.00' },
        { name: 'Vanilla Extract', amount: '5g', cost: '0.25' },
        { name: 'Baking Powder', amount: '8g', cost: '0.75' },
        { name: 'Honey', amount: '28g', cost: '1.75' },
    ];

    const [orderQuantity, setOrderQuantity] = useState(1);

    const calculateTotalCost = () => {
        return ingredients.reduce((total, { amount, cost }) => (total + parseFloat(amount) * parseFloat(cost)), 0);
    };

    const handlePlaceOrder = () => {
        const totalCost = calculateTotalCost();
        const confirmation = window.confirm(`Order for ${orderQuantity} biscuit(s) has been added to the order list. Total cost: ${totalCost.toFixed(2)}. Do you want to place an order with other shapes of biscuits?`);
        if (confirmation) {
            // Redirect to home page to select another biscuit shape
            window.location.href = '/'; // Change the URL as needed
        } else {
            // Redirect to the bill page
            window.location.href = '/bill'; 
        }
    };

    return (
        <div className="flex items-center justify-center space-x-4 font-serif">
            <img src="https://png.pngtree.com/png-vector/20230909/ourmid/pngtree-christmas-cookie-star-png-image_10011830.png" alt="Star" className="h-48 rounded-lg " />
            <div>
                <h2 className="text-xl font-semibold mb-4">Gingerbread Cookies</h2>
                <p className="text-lg mb-4">
                Gingerbread Cookies are star shaped, delicious cookies. <br/>
                    Their main ingredients are chocolate chips and oil, 
                    hence the adjective "yummy". <br/>
                    They have a nutty, sweet tinge and are quite "addictive"
                </p>
                <table className="border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Ingredient</th>
                            <th className="border border-gray-400 px-4 py-2">Amount</th>
                            <th className="border border-gray-400 px-4 py-2">Cost(INR) per unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients.map((ingredient, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 px-4 py-2">{ingredient.name}</td>
                                <td className="border border-gray-400 px-4 py-2">{ingredient.amount}</td>
                                <td className="border border-gray-400 px-4 py-2">{parseFloat(ingredient.cost).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center mt-4">
                    <label className="mr-2">Number of Orders:</label>
                    <input
                        type="number"
                        min="1"
                        value={orderQuantity}
                        onChange={(e) => setOrderQuantity(e.target.value)}
                        className="border border-gray-400 px-2 py-1 w-16"
                    />
                </div>
                <div className="mt-4">
                    <button onClick={handlePlaceOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
