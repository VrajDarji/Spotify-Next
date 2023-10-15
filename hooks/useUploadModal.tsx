import { create } from "zustand";

interface UplaodModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useUploadModal = create<UplaodModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
