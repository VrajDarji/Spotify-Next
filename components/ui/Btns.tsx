"use client";
import { Plus, ArrowRight } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import usePlaylistModal from "@/hooks/usePlaylistModal";
const btns = ["playlists", "artists", "albums"];
const Btns = () => {
  const authModal = useAuthModal();
  const UploadModal = useUploadModal();
  const PlaylistModal = usePlaylistModal();
  const { user } = useUser();
  const uploadSong = () => {
    if (!user) {
      return authModal.onOpen();
    }
    return UploadModal.onOpen();
  };
  const createPlaylist = () => {
    if (!user) {
      return authModal.onOpen();
    }
    return PlaylistModal.onOpen();
  };
  return (
    <>
      <div className="h-full flex flex-col px-2">
        <div className="flex items-center justify-between pb-3">
          <h1 className="text-2xl font-medium">Your Library</h1>
          <div className="flex gap-1">
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <button>
                    <Plus />
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new" onClick={createPlaylist}>
                    Create a new playlist
                  </DropdownItem>
                  <DropdownItem key="new2" onClick={uploadSong}>
                    Upload a new song
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            <ArrowRight />
          </div>
        </div>
        <div className="flex flex-row w-full gap-2 overflow-x-scroll">
          {btns.map((e) => (
            <button
              key={e}
              className="capitalize py-1 px-3 rounded-2xl bg-[#232323] min-w-fit"
            >
              {e}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default Btns;
