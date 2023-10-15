"use client";
import { usePlaylistLoadImage } from "@/hooks/useLoadImage";
import { Playlist } from "@/types";
import HomeList from "./HomeList";

interface PlaylistCardProps {
  data: Playlist;
}
const PlaylistCard: React.FC<PlaylistCardProps> = ({ data }) => {
  const image = usePlaylistLoadImage(data);
  return <HomeList title={data.title} image={image} />;
};
export default PlaylistCard;
