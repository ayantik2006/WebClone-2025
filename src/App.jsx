import Navbar from "./components/Navbar";
import hand from "./assets/hand.png";
import btn from "./assets/button.png";
import laptop from "./assets/laptop.png";

function App() {
  return (
    <div className="bg-[#bc82fe] w-screen min-h-screen">
      <div className="bg-[#d3aeff] w-screen min-h-[45rem] rounded-bl-[19rem] rounded-br-[19rem] flex flex-col items-center">
        <div className="bg-[#efe7f7] w-screen min-h-[43rem] rounded-bl-[19rem] rounded-br-[19rem] flex flex-col items-center bg-[length:150px] bg-no-repeat bg-center">
          <Navbar />
          <div className="w-fit h-fit p-4 bg-[#d3aeff] z-50 relative top-[8rem] rounded-2xl border-1 shadow-[8px_8px]">
            <div className="bg-[#d3aeff] w-[60rem] h-[12rem] border-dotted border-2 rounded-2xl flex flex-col items-center justify-center">
              <h1 className="font-bold text-[110px]">HACK ODISHA</h1>
              <p className="text-[30px] mb-5 font-semibold">
                06-07th, September 2025
              </p>
            </div>
          </div>
          {/* <img src={laptop} className="w-[14rem] z-60" /> */}
          <div className="w-[10rem] h-[7rem] rounded-2xl bg-white border-2 z-60 items-center justify-center flex font-extrabold text-[5rem] relative left-[27rem] top-[5rem]">
            <p>5.0</p>
          </div>
          <img src={btn} className="w-[5rem] z-60 relative top-[11.3rem] left-[5rem]" />
          <div className="bg-[#fede64] w-[20rem] h-[7rem] relative top-[9.5rem] z-50 rounded-3xl border-1 flex items-center justify-center">
            <button className="bg-white w-[17rem] py-[0.5rem] text-[1.2rem] border-1 rounded shadow-[3px_4px_0.4rem] font-bold rotate-5 cursor-pointer hover:-rotate-0 duration-300">
              <p>Apply with DevFolio</p>
            </button>
          </div>
        </div>
        <div className="z-30">
          <img
            src={hand}
            className="absolute bottom-[13rem] w-[9rem] left-[45rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// style={{ backgroundImage: `url(${hand})`, position:"relative", top:"-2rem" }}
