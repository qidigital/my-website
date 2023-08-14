import React from 'react';
const arrow_head =
    "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";

const Arrow = ({width='50px'}) => {
    return (
        <div className={`w-full max-w-[60px] mt-3 `}>
            <div className={`relative border border-amber-600  border-l-0 border-r-0 border-b-0 max-w-[${width}]`}>
                <img src={arrow_head} className="h-4 absolute right-0 -top-2"/>
            </div>
        </div>
    );
};

export default Arrow;


