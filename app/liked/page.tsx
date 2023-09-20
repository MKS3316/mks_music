import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContents from "./components/LikedContents";

const Liked =async () => {
  const songs = await getLikedSongs();

  return (
    <div className="h-full w-full bg-neutral-800 rounded-lg overflow-y-auto overflow-hidden">
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row gap-x-5 items-center">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                src={"/images/liked.png"}
                alt="Playlist"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-3 mt-2 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <h1
                className=" text-white 
                  text-4xl 
                  sm:text-5xl 
                  lg:text-7xl 
                  font-bold"
              >
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContents songs={songs}/>
    </div>
  );
};

export default Liked;
