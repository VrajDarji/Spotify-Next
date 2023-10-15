"use client";
import { Button, Image } from "@nextui-org/react";
import { Play } from "lucide-react";

interface ListProps {
  image: string | undefined;
  title: string;
}

const HomeList: React.FC<ListProps> = ({ image, title }) => {
  return (
    <div className="group h-[10vh] rounded-md bg-[hsla(0,0%,100%,.1)] flex flex-row w-full relative cursor-pointer">
      <Image src={image} alt="image" className="h-full" radius="md" />
      <div className="flex items-center px-4">
        {title}
        <Button
          isIconOnly
          radius="full"
          className="absolute opacity-0 group-hover:opacity-100 right-5 h-[6vh] w-[6vh] shadow-lg bg-[#1db954] btn1"
        >
          <Play fill="black" color="black" />
        </Button>
      </div>
    </div>
  );
};

export default HomeList;
