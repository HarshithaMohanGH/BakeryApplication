import React from 'react';
import { useNavigate } from 'react-router-dom';

const Customize = () => {
    const navigate = useNavigate();

    const handleAutomaticOption = () => {
        // Navigate to the page for the automatic option
        navigate('/automatic');
    };

    const handleUserGivenQuantityOption = () => {
        // Navigate to the page for the user given quantity option
        navigate('/user-given-quantity');
    };

    const handleUserGivenIngredientsOption = () => {
        // Navigate to the page for the user given ingredients option
        navigate('/ingredients');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center animate-gradient-x">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-8 text-black">Hey Viewer! It's your choice in here!!</h1>
                {/* Display three buttons for the three options */}
                <div className="space-y-4 items-center justify-center">
                    <button onClick={handleAutomaticOption} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mb-4">Automatic</button><br/>
                    <button onClick={handleUserGivenQuantityOption} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mb-4">It's My Choice of Quantity</button><br/>
                    <button onClick={handleUserGivenIngredientsOption} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mb-4">With These Ingredients, What All Can Be Done?</button><br/>
                </div>
            </div>
        </div>
    );
};

export default Customize;
