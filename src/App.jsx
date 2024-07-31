import React, { useState } from 'react';


const App = () => {
  const [pets, setPets] = useState([]);
  const [petName, setPetName] = useState('');
  const [selectedPet, setSelectedPet] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleAddPet = () => {
    if (petName.trim()) {
      setPets([...pets, { name: petName, food: 50, play: 50, happiness: 50 }]);
      setPetName('');
      setShowForm(false);
    }
  };

  const handleSelectPet = (index) => {
    setSelectedPet(index);
    setShowForm(false);
  };

  const handleFeedPet = () => {
    if (selectedPet !== null) {
      const newPets = [...pets];
      newPets[selectedPet].food = Math.min(100, newPets[selectedPet].food + 10);
      setPets(newPets);
    }
  };

  const handlePlayWithPet = () => {
    if (selectedPet !== null) {
      const newPets = [...pets];
      newPets[selectedPet].play = Math.min(100, newPets[selectedPet].play + 10);
      setPets(newPets);
    }
  };

  const handleReset = () => {
    setPets([]);
    setPetName('');
    setSelectedPet(null);
    setShowForm(true);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h1 className="text-3xl mb-4 text-center">Virtual Pet Game</h1>

        {showForm && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter pet name"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              className="border p-2 rounded text-black w-full"
            />
            <button
              onClick={handleAddPet}
              className="mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition-colors"
            >
              Add Pet
            </button>
          </div>
        )}

        {pets.length > 0 && !showForm && (
          <div className="mb-4">
            <h2 className="text-2xl mb-2 text-center">Select a Pet</h2>
            <ul>
              {pets.map((pet, index) => (
                <li key={index} className="mb-2 text-center">
                  <button
                    onClick={() => handleSelectPet(index)}
                    className="px-4 py-2 bg-green-500 rounded hover:bg-green-700 transition-colors"
                  >
                    {pet.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedPet !== null && (
          <div className="mb-4 text-center">
            <h2 className="text-2xl mb-2">Pet: {pets[selectedPet].name}</h2>
            <p>Food: {pets[selectedPet].food}</p>
            <p>Play: {pets[selectedPet].play}</p>
            <p>Happiness: {pets[selectedPet].happiness}</p>
            <div className="mt-4">
              <button
                onClick={handleFeedPet}
                className="mr-2 px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-700 transition-colors"
              >
                Feed
              </button>
              <button
                onClick={handlePlayWithPet}
                className="ml-2 px-4 py-2 bg-purple-500 rounded hover:bg-purple-700 transition-colors"
              >
                Play
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleReset}
          className="mt-4 w-full px-4 py-2 bg-red-500 rounded hover:bg-red-700 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
