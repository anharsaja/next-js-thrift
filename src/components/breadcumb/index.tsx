function Breadcumb() {
  return <div className="bg-gray-100 px-8 xl:px-56 h-16 flex items-center gap-4 font-normal text-[14px]">
    <div className="hover:text-orange-600">Home</div>
    <div>&gt;</div>
    <div className="hover:text-orange-600">Shop</div>
  </div>;
}

export default Breadcumb;
