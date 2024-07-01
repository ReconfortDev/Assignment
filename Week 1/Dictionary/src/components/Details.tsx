// Details.tsx
import React from "react";

interface DetailsProps {
    name: string;
    definitions: string[];
    customCss?: string;
}

const Details: React.FC<DetailsProps> = ({ name, definitions, customCss }) => {
    return (
        <fieldset className={`${customCss} border-t-2 border-lightGray dark:border-darkGray flex flex-col gap-4 items-start justify-start py-4`}>
            <legend className="pr-4 text-xl font-bold text-dark dark:text-light"><i>{name}</i></legend>
            <h2 className="text-lg text-gray dark:text-gray">Meaning</h2>
            <ul className="pl-5 text-base text-dark dark:text-light w-full flex flex-col gap-3 font-medium ">
                {definitions.map((definition, index) => (
                    <li key={index}>{definition}</li>
                ))}
            </ul>
        </fieldset>
    );
};

export default Details;