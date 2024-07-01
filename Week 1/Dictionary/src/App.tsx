import './App.css'
import SearchBox from "./components/SearchBox.tsx";
import Details from "./components/Details.tsx";
import { IoPlaySharp } from "react-icons/io5";
import { RxOpenInNewWindow } from "react-icons/rx";
import React, { useState, useEffect } from "react";

interface WordDetails {
    word: string;
    phonetics: { text: string; audio: string }[];
    meanings: { partOfSpeech: string; definitions: { definition: string }[] }[];
}

const App: React.FC = () => {
    const [searchContent, setSearchContent] = useState<string>('');
    const [wordDetails, setWordDetails] = useState<WordDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (searchContent.trim() !== "") {
            setLoading(true);
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchContent}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        setWordDetails(data[0]);
                    } else {
                        setWordDetails(null);
                    }
                    setLoading(false);
                }).catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
                setWordDetails(null);
            });
        } else {
            setWordDetails(null);
        }
    }, [searchContent]);

    const playAudio = (audioUrl: string) => {
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
        }
    };

    return (
        <div className="w-full flex flex-col gap-20 lg:gap-8">
            <SearchBox searchContent={searchContent} setSearchContent={setSearchContent} />

            {loading && <p>Loading...</p>}

            {wordDetails ? (
                <div className="w-full flex flex-col gap-6 p-1">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex flex-col gap-2 lg:gap-4 items-start justify-start">
                            <h1 className="text-4xl md:text-6xl font-black dark:text-light">{wordDetails.word}</h1>
                            {wordDetails.phonetics.length > 0 && (
                                <p className="text-purple text-lg">{wordDetails.phonetics[0].text}</p>
                            )}
                        </div>
                        <button
                            onClick={() => playAudio(wordDetails.phonetics[0]?.audio)}
                            className="w-16 h-16 bg-purple/20 dark:bg-purple/40 hover:bg-purple/100 group flex justify-center items-center rounded-full outline-none border-none">
                            <IoPlaySharp className="text-purple text-2xl group-hover:text-light" />
                        </button>
                    </div>

                    {wordDetails.meanings.map((meaning, index) => (
                        <Details key={index} name={meaning.partOfSpeech} definitions={meaning.definitions.map(def => def.definition)} />
                    ))}

                    {wordDetails.meanings.length > 0 && (
                        <div className="flex gap-4">
                            <h3 className="text-gray">Source</h3>
                            <a className="flex text-sm items-center gap-2" href={`https://en.wiktionary.org/wiki/${wordDetails.word}`} target="_blank" rel="noopener noreferrer">
                                <span className="text-dark dark:text-light">
                                    {`https://en.wiktionary.org/wiki/${wordDetails.word}`}
                                </span>
                                <RxOpenInNewWindow className="text-gray" />
                            </a>
                        </div>
                    )}
                </div>
            ) : (
                searchContent && !loading && (
                    <div className="w-full flex flex-col justify-center items-center p-8 gap-5">
                        <img src="../public/images/notFound.png" alt="Not found" className="w-12 h-12" />
                        <h2 className="text-lg font-bold text-darker dark:text-light">No Definitions Found</h2>
                        <p className="text-center w-[90%] text-gray">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
                    </div>
                )
            )}
        </div>
    );
};

export default App;
