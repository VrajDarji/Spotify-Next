"use client";
import { useSongLoadImage } from "@/hooks/useLoadImage";
import { Song } from "@/types";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Play } from "lucide-react";

interface SongCardProps {
  song: Song;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const imagePath = useSongLoadImage(song);
  return (
    <Card className="py-4" isHoverable isPressable isBlurred radius="sm">
      <CardBody className="overflow-visible py-2 relative group">
        <Image
          alt="Card background"
          className="aspect-square object-cover rounded-md"
          src={imagePath}
          width={270}
          height={270}
        />
        <Button
          color="success"
          isIconOnly
          className="absolute opacity-0 group-hover:opacity-100 z-20 bottom-5 right-7 h-[6vh] w-[6vh] btn1"
          radius="full"
        >
          <Play fill="black" />
        </Button>
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{song.title}</h4>
        <p className="text-small text-foreground/80">{song.author}</p>
      </CardHeader>
    </Card>
  );
};
export default SongCard;
