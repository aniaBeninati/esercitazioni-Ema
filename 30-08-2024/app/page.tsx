import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex-grow flex justify-center items-center overflow-hidden">
      <div className="relative w-full h-[calc(100vh-64px-32px)]">
        <Image 
          src="https://lh4.googleusercontent.com/proxy/ifcDFsRHpXzKeHktR8wErYSkLCn0H2LMZMSMRb9lR6VaNjYY8OKwLGXt7XeVYjVakIBBwGHQnmFisOho0vlH49vL_hpogPkCtBRarBKwdM0XzwIzp4uALU0OaPr44BVVqQM2m7bc9OIr=w1200-h630-p-k-no-nu" 
          alt="Home Image"
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center 90%' // Questo sposta l'immagine leggermente verso l'alto
          }}
          priority 
        />
      </div>
    </div>
  );
};

export default HomePage;