import React from 'react';
import Arrow from "./Arrow";
import Link from '@docusaurus/Link';

const ArrowButton = ({linkText = null, link = '#', textClass = 'text-black'}) => {
    if (linkText === null) {
        return null;
    } else {
        return (
            <div className="flex max-w-[250px]">
                <div className={`text-2xl w-1/2`}>
                    <Link to={link} className={textClass}>{linkText}</Link>
                </div>
                <Arrow/>
            </div>
        )
    }

}

export default ArrowButton;