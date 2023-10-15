import { Home, Search } from "lucide-react";
import Link from "next/link";

const SideUp = () => {
  return (
    <div className="bg-[#121212] rounded-md flex flex-col gap-3 px-5 py-5 text-2xl font-medium">
      <Link href={"/"} className="flex flex-row gap-2 items-center">
        <Home />
        Home
      </Link>
      <Link href={"/search"} className="flex flex-row gap-2 items-center">
        <Search />
        Search
      </Link>
    </div>
  );
};
export default SideUp;
