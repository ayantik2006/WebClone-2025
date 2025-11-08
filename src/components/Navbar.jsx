import logo from "../assets/logo.svg";
import discord from "../assets/discord.png"
function Navbar() {
  return (
    <div className="w-[70%] h-[4.3rem] bg-white fixed top-[2rem] rounded-[1.5rem] border-1 flex items-center z-60">
      <img src={logo} className="w-[5.4rem] ml-[2.3rem] mr-[16rem]" />
      <div className="flex gap-8">
        <div className="flex gap-5">
          <a className="font-semibold hover:text-[#bc82fe] cursor-pointer duration-300">
            Home
          </a>
        </div>
        <div className="flex gap-5">
          <a className="font-semibold hover:text-[#bc82fe] cursor-pointer duration-300">
            About us
          </a>
        </div>
        <div className="flex gap-5">
          <a className="font-semibold hover:text-[#bc82fe] cursor-pointer duration-300">
            Contact us
          </a>
        </div>
        <div className="flex gap-5">
          <a className="font-semibold hover:text-[#bc82fe] cursor-pointer duration-300">
            Timeline
          </a>
        </div>
      </div>

      <button className="flex items-center gap-3 bg-[#bc82fe] ml-[9.2rem] px-[1rem] py-[0.4rem] rounded-[0.4rem] shadow-[-3px_3px_] border-1 hover:bg-[#c89cfa] duration-300 cursor-pointer hover:translate-y-[-2px] hover:translate-x-[1px]">
        <img src={discord} className="w-[1.3rem] "/>
        <p className="font-semibold">Join Discord</p>
      </button>
    </div>
  );
}

export default Navbar;
