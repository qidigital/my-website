import React from 'react';
import Arrow from "./Arrow";
import Link from '@docusaurus/Link';

const ArrowButton = ({linkText = null, link = '#', textColor = 'text-black'}) => {
    if (linkText === null) {
        return null;
    } else {
        return (
            <div className="flex max-w-[250px]">
                <div className={`text-2xl w-1/2`}>
                    <Link to={link} className={textColor}>{linkText}</Link>
                </div>
                <Arrow/>
            </div>
        )
    }

}

export default ArrowButton;