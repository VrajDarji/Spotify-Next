import SidePlaylist from "../SidePlaylist";
import Btns from "./Btns";
import PlaylistList from "./PlaylistList";
const SideLow = () => {
  return (
    <div className="bg-[#121212] rounded-md h-full grid sid-rows p-3">
      <Btns />
      <PlaylistList />
    
    </div>
  );
};
export default SideLow;
