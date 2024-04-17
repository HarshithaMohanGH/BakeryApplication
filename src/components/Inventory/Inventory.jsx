import React from 'react';

const Inventory = () => {
    const inventoryData = {
        "Flour": { "quantity": 4390, "unit": "g", "costPerUnit": 0.5, "caloriesPerUnit": 19 },
        "Sugar": { "quantity": 2960, "unit": "g", "costPerUnit": 0.8, "caloriesPerUnit": 48 },
        "Butter": { "quantity": 1500, "unit": "g", "costPerUnit": 1.2, "caloriesPerUnit": 39 },
        "ChocolateChips": { "quantity": 2313, "unit": "g", "costPerUnit": 2.5, "caloriesPerUnit": 26 },
        "VanillaExtract": { "quantity": 360, "unit": "ml", "costPerUnit": 3.0, "caloriesPerUnit": 8 },
        "BakingPowder": { "quantity": 185, "unit": "g", "costPerUnit": 0.3, "caloriesPerUnit": 12 },
        "Oil": { "quantity": 1875, "unit": "ml", "costPerUnit": 1.2, "caloriesPerUnit": 32 }
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Inventory</h2>
            <table className="min-w-full border-collapse">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border border-gray-500">Ingredient</th>
                        <th className="py-2 px-4 border border-gray-500">Quantity</th>
                        <th className="py-2 px-4 border border-gray-500">Unit</th>
                        <th className="py-2 px-4 border border-gray-500">Cost Per Unit</th>
                        <th className="py-2 px-4 border border-gray-500">Calories Per Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(inventoryData).map(([ingredient, data]) => (
                        <tr key={ingredient} className="border border-gray-500">
                            <td className="py-2 px-4">{ingredient}</td>
                            <td className="py-2 px-4">{data.quantity}</td>
                            <td className="py-2 px-4">{data.unit}</td>
                            <td className="py-2 px-4">{data.costPerUnit}</td>
                            <td className="py-2 px-4">{data.caloriesPerUnit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Inventory = () => {
//     const [inventory, setInventory] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await fetchInventory();
//             setInventory(data);
//         };

//         fetchData();
//     }, []);

//     const fetchInventory = async () => {
//         try {
//             console.log('Fetching inventory data...');
//             const response = await axios.get('http://localhost:3000/api/items');
//             console.log('Inventory data fetched successfully:', response.data);
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching inventory:', error);
//             return []; // Return an empty array in case of error
//         }
//     };

//     return (
//         <div>
//             <h2>Inventory</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Quantity</th>
//                         <th>Unit</th>
//                         <th>Cost Per Unit</th>
//                         <th>Calories Per Unit</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {inventory.map(item => (
//                         <tr key={item._id}>
//                             <td>{item.name}</td>
//                             <td>{item.quantity}</td>
//                             <td>{item.unit}</td>
//                             <td>{item.costPerUnit}</td>
//                             <td>{item.caloriesPerUnit}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Inventory;
