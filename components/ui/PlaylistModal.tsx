"use client";

import usePlaylistModal from "@/hooks/usePlaylistModal";
import Dialog from "./Modal";
import uniqid from "uniqid";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { title } from "process";
const PlaylistModal = () => {
  const playlistModal = usePlaylistModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      image: null,
    },
  });

  const onChange = () => {
    if (playlistModal.isOpen) {
      reset();
      playlistModal.onClose();
    }
  };
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setLoading(true);
      console.log("submit called");

      const image = values.image?.[0];
      if (!image || !user) {
        toast.error("Missing Fields");
        return;
      }
      const uniqueId = uniqid();
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueId}`, image, {
            cacheControl: "3600",
            upsert: false,
          });
      if (imageError) {
        setLoading(false);
        return toast.error("Failed image upload");
      }
      const { error: supabaseError } = await supabaseClient
        .from("playlist")
        .insert({
          user_id: user.id,
          title: values.title,
          image_path: imageData.path,
        });

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }
      router.refresh();
      setLoading(false);
      toast.success("Playlist created!");
      reset();
      playlistModal.onClose();
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
      router.refresh();
    }
  };
  return (
    <Dialog
      title="Create a Playlist"
      desc="create your personalizes playlist just for you!!!!"
      isOpen={playlistModal.isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 pb-5"
      >
        <Input
          type="text"
          label="Title"
          isRequired
          placeholder="Playlist Name .."
          labelPlacement="outside"
          id="title"
          radius="sm"
          disabled={loading}
          {...register("title", { required: true })}
        />
        <p className="mb-[-.625rem] text-sm">Choose Image</p>
        <input
          type="file"
          id="image"
          disabled={loading}
          accept="image/*"
          {...register("image", { required: true })}
          className="w-full h-full font-normal !bg-[#27272a] p-2 rounded-md outline-none placeholder:text-foreground-500 text-small file:border-0 file:bg-transparent file:text-sm file:font-medium "
        />
        <button
          type="submit"
          className="py-2 rounded-full bg-green-500 capitalize text-lg font-medium"
        >
          create
        </button>
      </form>
    </Dialog>
  );
};
export default PlaylistModal;
