import Songs from "../Songs";
import HomeList from "./HomeList";
import Playlist from "../Playlists";
const MainContent = () => {
  return (
    <>
      <div className="p-4 bg-gradient-to-b from-[#4a5356] flex flex-col px-5 gap-10 ">
        <h1 className="text-4xl font-semibold">Welcome Back</h1>
        <div className="w-full grid grid-cols-3 gap-10">
          <HomeList
            image="https://misc.scdn.co/liked-songs/liked-songs-64.png"
            title="Liked Songs"
          />
          <Playlist />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">Newest Songs</h1>
        <Songs />
      </div>
    </>
  );
};
export default MainContent;
