import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchProps {
    searchContent: string;
    setSearchContent: (text: string) => void;
}

const SearchBox: React.FC<SearchProps> = ({ searchContent, setSearchContent }) => {
    const [isEmptyError, setIsEmptyError] = useState(false);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchContent.trim() === "") {
            setIsEmptyError(true);
        } else {
            setIsEmptyError(false);
        }
    };

    return (
        <div className="w-full flex flex-col gap-2 lg:gap-4">
            <form
                onSubmit={handleSearch}
                className={`w-full flex justify-between items-center bg-lightGray dark:bg-darker p-1 rounded-xl gap-4 border border-transparent hover:border-purple ${isEmptyError ? 'border-red hover:border-red' : ''}`}
            >
                <input
                    className="w-full h-12 bg-transparent outline-none border-none px-4 font-bold text-dark dark:text-light text-lg cursor-text"
                    placeholder="Search for any word"
                    value={searchContent}
                    onChange={(e) => {
                        setSearchContent(e.target.value);
                        setIsEmptyError(false);
                    }}
                />
                <button type="submit" className="w-12 h-12 flex justify-center items-center outline-none border-none">
                    <IoSearch className="text-2xl text-purple" />
                </button>
            </form>
            {isEmptyError && <p className="text-red font-semibold">Whoops, can’t be empty…</p>}
        </div>
    );
};

export default SearchBox;