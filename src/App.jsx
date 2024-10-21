import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen bg-gray-900">
        <div className="flex h-[90%] ">
            <Sidebar/>
            <Display/>
        </div>
            <Player/>
            <audio src="" preload="auto"></audio>
      </div>
    </>
  );
}

export default App;
