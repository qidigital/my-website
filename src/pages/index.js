import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ArrowButton from "../components/shared/arrowButton/ArrowButton";

const links = [
    {
        data: [
            {
                name: 'Use cases',
                link: '/#'
            },
            {
                name: 'Synergy API',
                link: '/#'
            },
            {
                name: 'Knowledgeable',
                link: '/#'
            },
            {
                name: 'Blockchain testnets',
                link: '/#'
            }
        ],
    },
    {
        data: [
            {
                name: 'Overview',
                link: '/#'
            },
            {
                name: 'Start guide',
                link: '/#'
            },
            {
                name: 'Smart API',
                link: '/#'
            },
            {
                name: 'Web3 connectivity',
                link: '/#'
            },
            {
                name: 'Reporting',
                link: '/#'
            }
        ],
    },
    {
        data: [
            {
                name: 'Use cases',
                link: '/#'
            },
            {
                name: 'Synergy API',
                link: '/#'
            },
            {
                name: 'Knowledgeable',
                link: '/#'
            },
            {
                name: 'Blockchain testnets',
                link: '/#'
            }
        ]
    }
]
const HomePageHero = () => {
    return (
        <div className={`w-full py-6`}>
            <div className="custom-site-wrapper min-h-[350px] md:min-h-[330px] md:h-[400px]">
                <div className={`flex items-center justify-center`}>
                    <div className={`w-full pt-10`}>
                        <h1 className={`text-6xl font-medium font-cormorant-garamond`}>Documentation</h1>
                        <p className={`text-3xl font-n max-w-[500px] pb-6`}>Find examples, integration guides and other
                            ways of working with Qi.</p>
                        <div className={`text-black font-bold text--italic font-cormorant-garamond text-2xl`}>
                             <ArrowButton linkText={`explore docs`} link={`#`}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

const HomePageLinkBox = ({links, colName, heading}) => {

    const renderedLinks = links.map((link, index) => {
        return (
            <li key={`colName_${index}`} >
                <Link className={`text-[#566bd4] text-base md:text-medium`} to={link.link}>{link.name}</Link>
            </li>
        );
    });

    return (
        <div className={`md:max-w-[350px] w-full pb-6 lg:pb-0`}>
            <p className={`custom-site-2nd-header`}>
                {heading}
            </p>
            <ul className={`text-lg mt-5 px-0 space-y-4 md:space-y-3 font-semibold list-none `}>
                {renderedLinks}
            </ul>
        </div>
    );
}


export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
            wrapperClassName={`bg-map-of-the-world bg-contain bg-no-repeat`}
        >

            <HomePageHero/>

            <div className={`w-full`}>
                <div className="custom-site-wrapper items-top justify-between md:flex">
                    <HomePageLinkBox links={links[0].data} colName={'firstCol'} heading={`Integrated crypto payments`}/>
                    <HomePageLinkBox links={links[1].data} colName={'firstCol'} heading={`Hosted crypto gateway`}/>
                    <HomePageLinkBox links={links[2].data} colName={'firstCol'} heading={`Lighting as a service`}/>
                </div>
            </div>

        </Layout>
    );
}
