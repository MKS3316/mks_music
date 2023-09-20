import Header from "@/components/Header";
import ListItems from "@/components/ListItems";
import Listitems from "@/components/ListItems";
import PageContents from "./components/PageContents";
import getSongs from "@/actions/getSongs";

export const revalidate=0;



export default async function Home() {

  
  const songs=await getSongs();
  
  return (
  
    <div className='rounded-lg bg-neutral-800 h-full w-full overflow-hidden overflow-y-auto'>
      <Header>
        <div>
          <h1 className="text-3xl font-bold text-white">
            MKS Music
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
            <ListItems image="/images/liked.png" name="Liked Songs" href="liked"/>
          </div>
        </div>
      </Header>

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-white font-semibold">
            Latest Songs
          </h1>
        </div>
        <PageContents songs={songs} />
        
      </div>
        
      </div>
 
      
    
  )
}
