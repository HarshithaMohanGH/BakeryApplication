import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const UserGivenQuantity = () => {
    const [orders, setOrders] = useState({
        'Barazek (Circle)': 0,
        'Dalgona (Square)': 0,
        'Gingerbread (Star)': 0,
        'SnickerDoodle (Triangle)': 0
    });

    const [totalCost, setTotalCost] = useState(0);
    const [manufactureTime, setManufactureTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    const inventory = {
        Flour: { quantity: 5000, unit: 'g', costPerUnit: 0.5, caloriesPerUnit: 19 },
        Sugar: { quantity: 3000, unit: 'g', costPerUnit: 0.8, caloriesPerUnit: 48 },
        Butter: { quantity: 2000, unit: 'g', costPerUnit: 1.2, caloriesPerUnit: 39 },
        ChocolateChips: { quantity: 1000, unit: 'g', costPerUnit: 2.5, caloriesPerUnit: 26 },
        VanillaExtract: { quantity: 500, unit: 'ml', costPerUnit: 3.0, caloriesPerUnit: 8 },
        BakingPowder: { quantity: 200, unit: 'g', costPerUnit: 0.3, caloriesPerUnit: 12 },
        Oil: { quantity: 2000, unit: 'ml', costPerUnit: 1.2, caloriesPerUnit: 32 }
    };

    const biscuitShapes = ['Barazek (Circle)', 'Dalgona (Square)', 'Gingerbread (Star)', 'SnickerDoodle (Triangle)'];

    const handleOrderChange = (shape, value) => {
        setOrders(prevOrders => ({
            ...prevOrders,
            [shape]: value
        }));
    };

    const handlePlaceOrder = () => {
        let totalCost = 0;
        let manufactureTime = 0;
        let totalCalories = 0;

        biscuitShapes.forEach(shape => {
            const quantity = orders[shape];
            const ingredientsCost = calculateIngredientsCost();
            const shapeCost = calculateShapeCost(shape);
            const shapeTime = calculateShapeTime(shape);
            const shapeCalories = calculateShapeCalories(shape);

            totalCost += (ingredientsCost + shapeCost) * quantity;
            manufactureTime += (shapeTime * quantity)  /22 ;
            totalCalories += shapeCalories * quantity;
        });

        setTotalCost(totalCost);
        setManufactureTime(manufactureTime);
        setTotalCalories(totalCalories);
    };

    const biscuitImages = {
        'Barazek (Circle)': 'https://static.vecteezy.com/system/resources/thumbnails/009/659/861/small/watercolor-cookies-illustration-png.png',
        'Dalgona (Square)': 'https://static.vecteezy.com/system/resources/thumbnails/002/355/565/small_2x/square-biscuit-in-cartoon-style-isolated-free-vector.jpg',
        'Gingerbread (Star)': 'https://png.pngtree.com/png-vector/20230909/ourmid/pngtree-christmas-cookie-star-png-image_10011830.png',
        'SnickerDoodle (Triangle)': 'https://cdn.vectorstock.com/i/preview-1x/58/41/sweet-biscuit-icon-cartoon-cracker-food-vector-44435841.jpg'
    };

    const calculateIngredientsCost = () => {
        let ingredientsCost = 0;
        Object.values(inventory).forEach(item => {
            ingredientsCost *= item.quantity ;
        });
        return ingredientsCost;
    };

    const calculateShapeCost = (shape) => {
        // Just an example, you can define the cost for each shape as needed
        switch (shape) {
            case 'Barazek (Circle)':
                return 1.0;
            case 'Dalgona (Square)':
                return 1.5;
            case 'Gingerbread (Star)':
                return 2.0;
            case 'SnickerDoodle (Triangle)':
                return 1.2;
            default:
                return 0;
        }
    };

    const calculateShapeTime = (shape) => {
        // Just an example, you can define the time for each shape as needed
        switch (shape) {
            case 'Barazek (Circle)':
                return 10;
            case 'Dalgona (Square)':
                return 12;
            case 'Gingerbread (Star)':
                return 15;
            case 'SnickerDoodle (Triangle)':
                return 11;
            default:
                return 0;
        }
    };

    const calculateShapeCalories = (shape) => {
        // Just an example, you can define the calories for each shape as needed
        switch (shape) {
            case 'Barazek (Circle)':
                return 100;
            case 'Dalgona (Square)':
                return 120;
            case 'Gingerbread (Star)':
                return 150;
            case 'SnickerDoodle (Triangle)':
                return 110;
            default:
                return 0;
        }
    };

    return (
        <Link to='/user-given-quantity'>
        <div className="max-w-lg mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Enter your preferred numbers of biscuits</h2>
            {biscuitShapes.map(shape => (
                <div key={shape} className="flex items-center justify-between mb-4">
                    <img src={biscuitImages[shape]} alt={shape} className="w-16 h-16 mr-4" />
                    <label className="mr-2">No. of {shape}:</label>
                    <input
                        type="number"
                        value={orders[shape]}
                        onChange={(e) => handleOrderChange(shape, parseInt(e.target.value))}
                        min={0}
                        className="border border-gray-400 rounded-md px-2 py-1"
                    />
                </div>
            ))}
            <button onClick={handlePlaceOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Place Order
            </button>
            <div className="mt-4">
                <p className="text-md font-medium mb-2">Total Cost: ${totalCost.toFixed(2)}</p>
                <p className="text-md font-medium mb-2">Manufacture Time: {manufactureTime} minutes</p>
                <p className="text-md font-medium mb-2">Total Calories: {totalCalories}</p>
            </div>
        </div>
        </Link>
    );
};

export default UserGivenQuantity;

