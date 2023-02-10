import { CSSearchInput } from "./Search.styled";

interface SearchProps {
    setFilterString: (inputValue: string) => void;
}

const Search = ({setFilterString}: SearchProps) => {
    return (
        <CSSearchInput type="search" onChange={(e)=> setFilterString(e.target.value)} />
    )
}

export default Search;