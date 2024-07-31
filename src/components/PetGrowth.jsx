const PetGrowth = ({ pet }) => {
    return (
      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold text-white mb-4">{pet.name}'s Status</h2>
        <p className="text-white">Happiness: {pet.happiness}</p>
        <p className="text-white">Growth: {pet.growth}</p>
      </div>
    );
  };
  
  export default PetGrowth;
  