import SidePlaylist from "../SidePlaylist";
import PlayistListType from "./PlayistListType";
const PlaylistList = () => {
  return (
    <div className="h-full w-full flex flex-col gap-2 pt-3">
      <PlayistListType
        image="https://misc.scdn.co/liked-songs/liked-songs-64.png"
        type={"playlist"}
        title="Liked Songs"
      />
      <SidePlaylist />
    </div>
  );
};
export default PlaylistList;
