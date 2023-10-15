import getSongs from "@/actions/getSongs";
import SongCard from "./ui/SongCard";
const Songs = async () => {
  const songs = await getSongs();
  if (songs.length === 0) {
    return <h1 className="mt-4 text-neutral-400">No Songs Available</h1>;
  }
  return (
    <div className="grid grid-cols-5 gap-4">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};
export default Songs;
