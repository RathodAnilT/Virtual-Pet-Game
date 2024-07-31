const PetCare = ({ pet, onUpdatePet }) => {
    return (
      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold text-white mb-4">Care for {pet.name}</h2>
        <button
          onClick={() => onUpdatePet('feed')}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Feed Pet
        </button>
        <button
          onClick={() => onUpdatePet('play')}
          className="ml-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
        >
          Play with Pet
        </button>
      </div>
    );
  };
  
  export default PetCare;
  