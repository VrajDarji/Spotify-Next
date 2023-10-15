"use client";
import { usePlaylistLoadImage } from "@/hooks/useLoadImage";
import { Playlist } from "@/types";
import PlayistListType from "./PlayistListType";

interface SidePlaylistCardProps {
  data: Playlist;
}
const SidePlaylistCard: React.FC<SidePlaylistCardProps> = ({ data }) => {
  const image = usePlaylistLoadImage(data);
  return <PlayistListType image={image} title={data.title} type="playlist" />;
};
export default SidePlaylistCard;
