import { FiChevronDown, FiGrid, FiSliders } from "react-icons/fi";

function Mainleft() {
  return (
    <div className="bg-green-400 w-full h-full col-span-3">
      <div className="bg-white flex justify-between py-4 items-center">
        <p>
          We found <span className="text-orange-600 font-bold">16</span> items
          for you!
        </p>
        <div className="flex gap-2">
          <div className="bg-gray-100 border rounded-full py-3 px-5 text-sm flex items-center gap-2">
            <FiGrid /> Show 9 <FiChevronDown />
          </div>
          <div className="bg-gray-100 border rounded-full py-3 px-5 text-sm flex items-center gap-2">
            <FiSliders /> Sort by: Default Sorting <FiChevronDown />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-yellow-300 w-full grid grid-cols-3 gap-6 py-4">
          <div className="bg-gray-400 col-span-1 h-96 p-3">
                <div className="bg-red-300 h-[70%]">
                </div>
                <div className="bg-green-300 h-[30%]">
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainleft;
