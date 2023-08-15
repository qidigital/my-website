import React from 'react';
const arrow_head =
    "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";

const Arrow = ({width='50px'}) => {
    return (
        <div className={`w-full max-w-[60px] mt-5`}>
            <div className={`relative Arrow  border border-t-black  border-l-0 border-r-0 border-b-0 max-w-[200px]`}>
                <img src={arrow_head} className="h-5 absolute right-0 -top-[9.7px]"/>
            </div>
        </div>
    );
};

export default Arrow;


