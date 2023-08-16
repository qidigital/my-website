import React from 'react';
import Arrow from "./Arrow";
import Link from '@docusaurus/Link';

const ArrowButton = ({linkText = null, link = '#', textClass = 'text-black'}) => {
    if (linkText === null) {
        return null;
    } else {
        return (
            <div className="flex justify-start max-w-[350px]">
                <div className={`text-2xl w-auto pr-2`}>
                    <Link to={link} className={textClass}>{linkText}</Link>
                </div>
                <Arrow/>
            </div>
        )
    }

}

export default ArrowButton;