import Navbar from "./components/Navbar";
import hand from "./assets/hand.png";
function App() {
  return (
    <div className="bg-[#bc82fe] w-screen min-h-screen">
      <div className="bg-[#d3aeff] w-screen min-h-[45rem] rounded-bl-[19rem] rounded-br-[19rem] flex flex-col items-center">
        <div className="bg-[#efe7f7] w-screen min-h-[43rem] rounded-bl-[19rem] rounded-br-[19rem] flex flex-col items-center bg-[length:150px] bg-no-repeat bg-center">
          <Navbar/>
          <div className="w-fit h-fit p-4 bg-[#bc82fe] z-50 relative top-[8rem] rounded-2xl border-1">
            <div className="bg-[#bc82fe] w-[60rem] h-[12rem] border-dotted border-2 rounded-2xl flex flex-col items-center justify-center">
              <h1 className="font-bold text-[110px]">HACK ODISHA</h1>
              
            </div>
          </div>
        </div>
        <div className="z-30">
          <img src={hand} className="absolute bottom-[13rem] w-[9rem] left-[45rem]"/>
        </div>
        
      </div>
    </div>
  );
}

export default App;

// style={{ backgroundImage: `url(${hand})`, position:"relative", top:"-2rem" }}