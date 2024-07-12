import React, { useState } from 'react';
import avatar from '../assets/images/image-avatar.png';
import equilibriumImage from '../assets/images/image-equilibrium.jpg';
import ethereumIcon from '../assets/images/icon-ethereum.svg';
import clockIcon from '../assets/images/icon-clock.svg';
import viewIcon from '../assets/images/icon-view.svg';

const EquilibriumCard = () => {
   // Stato per gestire l'hover sull'immagine
  const [isHovered, setIsHovered] = useState(false);
  // Stato per gestire l'apertura e la chiusura della modale
  const [isModalOpen, setIsModalOpen] = useState(false);

   // Funzione per aprire la modale
  const openModal = () => setIsModalOpen(true);
  // Funzione per chiudere la modale
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-very-dark-blue-card-bg max-w-sm rounded-2xl overflow-hidden shadow-lg p-6 text-white font-outfit">
      <div 
        className="relative w-full rounded-lg overflow-hidden cursor-pointer" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        onClick={openModal}
      >
        <img 
          className={`w-full transition duration-300 ${isHovered ? 'opacity-50' : ''}`} 
          src={equilibriumImage} 
          alt="Equilibrium" 
        />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-cyan bg-opacity-50">
            <img src={viewIcon} alt="View Icon" className="w-10 h-10"/>
          </div>
        )}
      </div>
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

      {/* Modale */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <button 
              className="absolute top-0 right-0 m-4 text-cyan hover:text-cyan-dark" 
              onClick={closeModal}
            >
              X
            </button>
            <img src={equilibriumImage} alt="Equilibrium" className="w-full h-auto"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default EquilibriumCard;
