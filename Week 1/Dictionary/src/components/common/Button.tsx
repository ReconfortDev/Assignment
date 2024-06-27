import React from "react";

interface ButtonProps{
    name: string;
}

const Button: React.FC<ButtonProps> = ({name}) => {
    return (
        <button className="w-full bg-purple flex justify-between items-center">
            {name}
        </button>
    );
}

export default Button;
