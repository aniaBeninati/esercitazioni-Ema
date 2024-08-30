import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-full p-8">
      <Image 
        src="https://lh4.googleusercontent.com/proxy/ifcDFsRHpXzKeHktR8wErYSkLCn0H2LMZMSMRb9lR6VaNjYY8OKwLGXt7XeVYjVakIBBwGHQnmFisOho0vlH49vL_hpogPkCtBRarBKwdM0XzwIzp4uALU0OaPr44BVVqQM2m7bc9OIr=w1200-h630-p-k-no-nu" 
        alt="Home Image"
        width={1400} 
        height={1400} 
        className="max-w-full max-h-full object-contain"
        priority 
      />
    </div>
  );
};

export default HomePage;
