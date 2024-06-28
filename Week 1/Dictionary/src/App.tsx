import './App.css'
import SearchBox from "./components/SearchBox.tsx";
import { IoPlaySharp } from "react-icons/io5";
import { RxOpenInNewWindow } from "react-icons/rx";
import React, {useState} from "react";

interface DetailsProps {
    name: string;
    customCss?: string;
}

const Details: React.FC<DetailsProps> = ({ name, customCss }) => {
    return (
        <fieldset className={`${customCss} border-t-2 border-lightGray dark:border-darkGray flex flex-col gap-4 items-start justify-start py-4`}>
            <legend className="pr-4 text-xl font-bold text-dark dark:text-light"><i>{name}</i></legend>
            <h2 className="text-lg text-gray dark:text-gray">Meaning</h2>
            <ul className="pl-5 text-base text-dark dark:text-light w-full flex flex-col  gap-3 font-medium ">
                <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually
                    black and white keys that cause different tones to be produced when struck.
                </li>
                <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
            </ul>
        </fieldset>
    )
}

const Data = () => {
    return(
        // Search Data
    <div className="w-full flex flex-col gap-6 p-1">
        <div className="w-full flex items-center justify-between">
        <div className="flex flex-col gap-2 lg:gap-4 items-start justify-start">
        <h1 className="text-4xl md:text-6xl font-black dark:text-light">keyboard</h1>
    <p className="text-purple text-lg">/ˈkiːbɔːd/</p>
</div>
    <button
        className="w-16 h-16 bg-purple/20 dark:bg-purple/40 hover:bg-purple/100 group flex justify-center items-center rounded-full outline-none border-none">
        <IoPlaySharp className="text-purple text-2xl group-hover:text-light"/>
    </button>
</div>

    <Details name="noun"/>

    <div className="flex gap-4">
        <h2 className="text-lg text-gray font-light">Synonyms</h2>
        <p className="text-purple text-xl font-bold hover:underline cursor-pointer">electronic keyboard</p>
    </div>

    <Details name="verb" customCss="border-y-2"/>

    <div className="flex gap-4">
        <h3 className="text-gray">Source</h3>
        <a className="flex text-sm items-center gap-2" href="https://en.wiktionary.org/wiki/keyboard" target="_blank">
                    <span className="text-dark dark:text-light">
                        https://en.wiktionary.org/wiki/keyboard
                    </span>
            <RxOpenInNewWindow className="text-gray"/>
        </a>
    </div>
</div>
    )
}

function App() {
    const [searchContent, setSearchContent ] = useState<string>('')
    return (
        <div className="w-full flex flex-col gap-20 lg:gap-8">
            <SearchBox searchContent={searchContent} setSearchContent={setSearchContent} />

            {/*When data not available*/}
            {/*<div className="w-full flex flex-col justify-center items-center p-8 gap-5">*/}
            {/*    <img src="../public/images/notFound.png" alt="Not found" className="w-12 h-12"/>*/}
            {/*    <h2 className="text-lg font-bold text-darker dark:text-light">No Definitions Found</h2>*/}
            {/*    <p className="text-center w-[90%] text-gray">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>*/}
            {/*</div>*/}

            {/*Returned Data*/}
            <Data/>
      </div>
  )
}

export default App
