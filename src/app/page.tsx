import Breadcumb from "@/components/breadcumb";
import Header from "@/components/header";
import Mainleft from "@/components/main/left";
import Mainright from "@/components/main/right";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="w-full">
      {/* header */}
      <Header/>
      
      <Navbar/>

      <Breadcumb/>
      <div className="bg-blue-400 h-screen px-8 xl:px-56 grid grid-cols-4">
      <Mainleft/>

      <Mainright/>
      </div>
    </main>
  );
}
