import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { FiGrid, FiHeart, FiShoppingBag, FiSmartphone } from "react-icons/fi";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="w-full">
      {/* header */}
      <Header/>
      
      <nav className="w-full flex items-center justify-between px-8 xl:px-56 shadow">
        {/* category browse */}
        <div className="hover:text-orange-600 flex items-center gap-2 cursor-pointer">
          <FiGrid/>
          <h2 className="font-bold">Browse Categories</h2>
        </div>

        {/* menu */}
        <div className="py-4 px-12">
          <ul className="flex gap-6 h-full items-center justify-evenly font-bold text-sm">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Shop</Link>
            </li>
            <li>
              <Link href={"/"}>Our Collections</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
            <li>
              <Link href={"/"}>My Account</Link>
            </li>
          </ul>
        </div>
        {/* person */}
        <div className="hover:text-orange-600 flex items-center gap-2">
          <FiSmartphone size={18}/>
          <h2 className="text-sm font-semibold">+62 8570 6113 543</h2>
        </div>
      </nav>
    </main>
  );
}
