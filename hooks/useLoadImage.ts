import { Playlist, Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useSongLoadImage = (song: Song) => {
  const supabaseClinet = useSupabaseClient();
  if (!song) {
    return null;
  }
  const { data: imageData } = supabaseClinet.storage
    .from("images")
    .getPublicUrl(song.image_path);
  return imageData.publicUrl || undefined;
};
export const usePlaylistLoadImage = (playlist: Playlist) => {
  const supabaseClinet = useSupabaseClient();
  if (!playlist) {
    return null;
  }
  const { data: imageData } = supabaseClinet.storage
    .from("images")
    .getPublicUrl(playlist.image_path);
  return imageData.publicUrl || undefined;
};
