import React from 'react';
import Arrow from "./Arrow";

const ArrowButton = ({linkText = null, link = '#'}) => {
    if (linkText === null) {
        return null;
    } else {
        return (
            <div className="flex">
                <div className={`text-medium w-1/2`}>
                        {linkText}
                </div>
                <Arrow/>
            </div>
        )
    }

}

export default ArrowButton;