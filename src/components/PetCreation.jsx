import { useState } from 'react';

const PetCreation = ({ onCreatePet }) => {
  const [petName, setPetName] = useState('');

  const handleCreate = () => {
    if (petName.trim()) {
      onCreatePet(petName.trim());
      setPetName(''); // Clear input field after creation
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4 text-white">Create Your Virtual Pet</h1>
      <input
        type="text"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
        placeholder="Enter pet name"
        className="p-2 w-full border border-gray-600 bg-gray-900 text-gray-300 placeholder-gray-500 rounded"
      />
      <button
        onClick={handleCreate}
        className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
      >
        Create Pet
      </button>
    </div>
  );
};

export default PetCreation;
