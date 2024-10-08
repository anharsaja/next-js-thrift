import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

function Header() {
  return (
    <header className="py-3 px-8 xl:px-56 flex">
      {/* logo */}
      <div className="w-96 h-16 flex items-center">
        <Image className="" src={Logo} alt="logo" />
      </div>
      {/* search */}
      <div className="w-full px-24 flex items-center justify-center">
        <input
          className="bg-gray-200 px-4 py-2 w-full rounded-full text-[14px] focus:ring-[2px] ring-gray-300 focus:outline-none"
          type="search"
          name="search"
          id="search"
          placeholder="Search for items"
        />
      </div>
      {/* cart */}
      <div className="w-60 flex justify-end items-center gap-5">
        <FiHeart className="hover:text-orange-600" size={24} />
        <FiShoppingBag className="hover:text-orange-600" size={24} />
      </div>
    </header>
  );
}

export default Header;
