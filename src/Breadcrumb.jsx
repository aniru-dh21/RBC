import SlashImg from "./assets/slash.png";

export default function Breadcrumb() {
  return (
    <div className="bg-white">
      <ul className="flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
        <li className="cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md">
          Home
        </li>
        <img src={SlashImg} className="w-5 h-5" alt="" />
        <li className="cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300">
          Products
        </li>
        <img src={SlashImg} className="w-5 h-5" alt="" />
        <li className="cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300">
          About
        </li>
        <img src={SlashImg} className="w-5 h-5" alt="" />
        <li className="cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300">
          FAQ
        </li>
      </ul>
    </div>
  );
}
