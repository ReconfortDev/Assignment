import React from "react";

import ThemeToggle from "./common/ThemeToggle.tsx";
import FontToggle from "./common/FontToggle.tsx";
import { BiBook } from "react-icons/bi";

const Header: React.FC = () => {
    return (
        <main className="w-full flex justify-between items-center">
            <BiBook className="textxl lg:text-3xl text-gray"/>
            <div className="flex gap-3 items-center">
                <FontToggle/>
                <div className="h-5 bg-lightGray w-[1px]"></div>
                <ThemeToggle/>
            </div>
        </main>
    );
}

export default Header;
