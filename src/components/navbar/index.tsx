import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiGrid, FiSmartphone } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 xl:px-56 shadow">
      {/* category browse */}
      <div className="hover:text-orange-600 flex items-center gap-2 cursor-pointer">
        <FiGrid />
        <h2 className="font-bold">Browse Categories</h2>
      </div>

      {/* menu */}
      <div className="py-4 px-12">
        <ul className="flex gap-6 h-full items-center justify-evenly font-bold text-sm">
          <li className="hover:text-orange-600">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link href={"/"}>About</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link href={"/"}>Shop</Link>
          </li>
          <li className="hover:text-orange-600">
            <button className="flex items-center">Our Collections <FiChevronDown/></button>
          </li>
          <li className="hover:text-orange-600">
            <Link href={"/"}>Blog</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link href={"/"}>Contact</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link href={"/"}>My Account</Link>
          </li>
        </ul>
      </div>
      {/* person */}
      <div className="hover:text-orange-600 flex items-center gap-2">
        <FiSmartphone size={18} />
        <h2 className="text-sm font-semibold">+62 8570 6113 543</h2>
      </div>
    </nav>
  );
}

export default Navbar;
