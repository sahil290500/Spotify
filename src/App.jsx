import { useContext } from "react";
import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./context/PlayerContext.jsx";

function App() {
  const { audioRef,track } = useContext(PlayerContext);
  return (
    <>
      <div className="h-screen bg-gray-900">
        <div className="flex h-[90%] ">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
}

export default App;
