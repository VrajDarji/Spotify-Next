import getPlaylists from "@/actions/getPlaylists";
import SidePlaylistCard from "./ui/SidePlaylistCard";
const SidePlaylist = async () => {
  const playlists = await getPlaylists();
  return (
    <>
      {playlists.map((e) => {
        return <SidePlaylistCard key={e.id} data={e} />;
      })}
    </>
  );
};
export default SidePlaylist;
