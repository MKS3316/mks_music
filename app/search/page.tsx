import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import Input from "@/components/Input";
import SearchInput from "@/components/SearchInput";
import SearchComponents from "./components/SearchComponents";

interface SearchProps{
    searchParams:{
        title:string
    }
}

const Search =async ({searchParams}:SearchProps) => {

    const songs=await getSongsByTitle(searchParams.title)
    return ( 
        <div className='rounded-lg bg-neutral-800 h-full w-full overflow-hidden overflow-y-auto'>
            <Header className="from-bg-neutral-800">
                <div className="mb-2 flex flex-col gap-y-6"                                                                                                                                                             >
                    <h1 className="text-3xl font-semibold">
                        Search
                    </h1>
                    <SearchInput/>
                </div>
            </Header>
            <SearchComponents songs={songs}/>
        </div>
     );
}
 
export default Search;