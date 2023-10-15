"use client";
import { Image } from "@nextui-org/react";
interface PlayistListTypeProps {
  image: string;
  title: string;
  type: "playlist" | "album" | "podcast & shows";
}
const PlayistListType: React.FC<PlayistListTypeProps> = ({
  image,
  title,
  type,
}) => {
  return (
    <div className="h-[9vh] flex flex-row gap-3 rounded-md hover:bg-[#1f1f1f] p-2 ">
      <Image src={image} alt="" className="h-full aspect-square" radius="md" />
      <div className="flex flex-col justify-center">
        <p className="text-lg font-semibold capitalize">{title}</p>
        <p className="text-base capitalize font-medium mt-[-.4rem]">{type}</p>
      </div>
    </div>
  );
};
export default PlayistListType;
