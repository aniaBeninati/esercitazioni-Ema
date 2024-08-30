import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-full p-8">
      <Image 
        src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/36/92/fb/3692fb2c-c241-4816-7a8e-e4f941ff64ca/794043208225.jpg/1200x1200bf-60.jpg" 
        alt="Home Image"
        width={1200} 
        height={1200} 
        className="max-w-full max-h-full object-contain"
        priority 
      />
    </div>
  );
};

export default HomePage;
