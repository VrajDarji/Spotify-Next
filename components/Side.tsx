import SideLow from "./ui/Side-Low";
import SideUp from "./ui/Side-Up";

const Side = () => {
  return (
    <div className="grid side-rows gap-2 h-[98vh]">
      <SideUp />
      <SideLow />
    </div>
  );
};
export default Side;
