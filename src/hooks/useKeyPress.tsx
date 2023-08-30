import React, { useState } from "react";

// @ts-ignore
const useKeyPress = function (targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);

    // @ts-ignore
    function downHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    // @ts-ignore
    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", downHandler);
        document.addEventListener("keyup", upHandler);

        return () => {
            document.removeEventListener("keydown", downHandler);
            document.removeEventListener("keyup", upHandler);
        };
    });

    return keyPressed;
};

export default useKeyPress;