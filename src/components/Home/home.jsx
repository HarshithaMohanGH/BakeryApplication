import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [password, setPassword] = useState('');
    const correctPassword = 'admin123'; // Change this to your admin password

    const handlePasswordSubmit = () => {
        const enteredPassword = prompt('Enter Admin Password:');
        if (enteredPassword === correctPassword) {
            // Redirect to the inventory page after successful login
            window.location.href = '/inventory';
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-4xl font-bold mb-8">Select your Favourite Cookie shape and we'll tell you what its made of!!...</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Link to="/round" className="rounded-full overflow-hidden bg-yellow-900 h-28 w-28 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-blue-400">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/659/861/small/watercolor-cookies-illustration-png.png" alt="Round" className="h-16" />
                </Link>
                <Link to="/square" className="rounded-lg overflow-hidden bg-yellow-900 h-28 w-28 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-green-400">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/355/565/small_2x/square-biscuit-in-cartoon-style-isolated-free-vector.jpg" alt="Square" className="h-16" />
                </Link>
                <Link to="/triangle" className="rounded-none overflow-hidden bg-yellow-900 h-28 w-28 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-yellow-400">
                    <img src="https://cdn.vectorstock.com/i/preview-1x/58/41/sweet-biscuit-icon-cartoon-cracker-food-vector-44435841.jpg" alt="Triangle" className="h-16 rounded border" />
                </Link>
                <Link to="/star" className="rounded-full overflow-hidden bg-yellow-900 h-28 w-28 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-red-400">
                    <img src="https://png.pngtree.com/png-vector/20230909/ourmid/pngtree-christmas-cookie-star-png-image_10011830.png" alt="Star" className="h-16" />
                </Link>
            </div>
            <button onClick={handlePasswordSubmit} className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                See Inventory
            </button>
        </div>
    );
}
