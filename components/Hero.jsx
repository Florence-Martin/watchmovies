import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image
          src={"/homecinema.png"}
          alt="homecinema"
          width={200}
          height={200}
          layout="responsive"
          priority
        />
      </div>
      <h1 className="text-2xl text-gray-700 uppercase font-bold">
        Bienvenue !
      </h1>
      <p className="text-gray-500">Quel film ou série voulez-vous voir ?</p>
      <Link href="/contact">
        <button className="bg-gray-700 hover:bg-gray-300 text-white hover:text-gray-500 py-1 px-4 rounded-lg text-sm mt-4">
          Contact
        </button>
      </Link>
    </div>
  );
};

export default Hero;
