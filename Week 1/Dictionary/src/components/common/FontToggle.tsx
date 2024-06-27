import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const FontToggle: React.FC = () => {
    return(
        <div className="text-dark dark:text-light flex items-center gap-1 font-bold">
            Sans serif
            <FaAngleDown className="text-lg text-purple"/>
        </div>
    )
};

export default FontToggle;