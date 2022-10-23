import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="font-bold text-neutral-100 hover:text-[#F96826] p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/">
          <a className="text-base md:text-2xl">
            Watch <span>Me</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
