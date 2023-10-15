"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Dialog from "./Modal";
import uniqid from "uniqid";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
const UploadModal = () => {
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = () => {
    if (uploadModal.isOpen) {
      reset();
      uploadModal.onClose();
    }
  };
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setLoading(true);
      console.log("submit called");

      const image = values.image?.[0];
      const song = values.song?.[0];
      if (!image || !song || !user) {
        toast.error("Missing Fields");
        return;
      }
      const uniqueId = uniqid();

      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueId}`, song, {
          cacheControl: "3600",
          upsert: false,
        });
      if (songError) {
        setLoading(false);
        return toast.error("Failed song upload");
      }
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
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
        });

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }
      router.refresh();
      setLoading(false);
      toast.success("Song created!");
      reset();
      uploadModal.onClose();
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
      title="Upload Song"
      desc="Uplaod a song from your library (mp3 file)"
      isOpen={uploadModal.isOpen}
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
          placeholder="Song Title .."
          labelPlacement="outside"
          id="title"
          radius="sm"
          disabled={loading}
          {...register("title", { required: true })}
        />
        <Input
          type="text"
          label="Author"
          isRequired
          placeholder="Add Author .."
          labelPlacement="outside"
          id="author"
          radius="sm"
          disabled={loading}
          {...register("author", { required: true })}
        />
        <p className="mb-[-.625rem] text-sm">Choose Song</p>
        <input
          type="file"
          id="song"
          disabled={loading}
          accept=".mp3"
          {...register("song", { required: true })}
          className="w-full h-full font-normal !bg-[#27272a] p-2 rounded-md outline-none placeholder:text-foreground-500 text-small file:border-0 file:bg-transparent file:text-sm file:font-medium "
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
export default UploadModal;
