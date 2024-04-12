import { Spotlight } from "@/components/ui/ui/Spotlight";
import { Navbar } from "./components/Navbar";
import { Heading } from "./components/Heading";

export default function Page() {
  return (
    <div className="min-h-screen">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:top-20"
        fill="white"
      />
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.06] overflow-hidden ">
        <div className=" px-20 md:px-28">
        <Navbar/>
           <Heading/>
        </div>
         
      </div>

    </div>
  );
}
