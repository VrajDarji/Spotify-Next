"use client";
import AuthModal from "@/components/ui/AuthModal";
import PlaylistModal from "@/components/ui/PlaylistModal";
import UploadModal from "@/components/ui/uploadModal";
import { useState, useEffect } from "react";
const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
      <PlaylistModal />
    </>
  );
};
export default ModalProvider;
