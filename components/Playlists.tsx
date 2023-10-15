import getPlaylists from "@/actions/getPlaylists";
import PlaylistCard from "./ui/PlaylistCard";
const Playlist = async () => {
  const playlists = await getPlaylists();
  return (
    <>
      {playlists
        .filter((e, i) => i < 2)
        .map((e) => {
          return <PlaylistCard key={e.id} data={e} />;
        })}
    </>
  );
};
export default Playlist;
