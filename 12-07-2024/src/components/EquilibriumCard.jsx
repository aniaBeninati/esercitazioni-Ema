import React from 'react';
import avatar from '../assets/images/image-avatar.png';
import equilibriumImage from '../assets/images/image-equilibrium.jpg';
import ethereumIcon from '../assets/images/icon-ethereum.svg';
import clockIcon from '../assets/images/icon-clock.svg';

const EquilibriumCard = () => {
  return (
    <div className="bg-very-dark-blue-card-bg max-w-sm rounded-2xl overflow-hidden shadow-lg p-6 text-white font-outfit">
      <img className="w-full rounded-lg" src={equilibriumImage} alt="Equilibrium" />
      <div className="mt-6">
        <h1 className="text-xl font-semibold">Equilibrium #3429</h1>
        <p className="text-soft-blue mt-2">Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <img src={ethereumIcon} alt="Ethereum" className="w-4 h-4" />
            <span className="text-cyan ml-2">0.041 ETH</span>
          </div>
          <div className="flex items-center">
            <img src={clockIcon} alt="Clock" className="w-4 h-4" />
            <span className="text-soft-blue ml-2">3 days left</span>
          </div>
        </div>
        <hr className="border-very-dark-blue-line mt-4" />
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 border-2 border-white rounded-full">
            <img src={avatar} alt="Avatar" className="w-full h-full rounded-full" />
          </div>
          <p className="text-soft-blue ml-4">Creation of <span className="text-white">Jules Wyvern</span></p>
        </div>
      </div>
    </div>
  );
};

export default EquilibriumCard;
