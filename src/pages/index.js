import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
            wrapperClassName={`bg-map-of-the-world bg-contain bg-no-repeat`}
        >
            <div className={`w-full lg:px-6`}>
                <div className="max-w-[1480px] mx-auto  px-6 md:px-6 lg:px-0 ">
                    <div className={`flex items-center justify-center`}>
                        <div className={`w-full pt-10`}>
                            <h1 className={`text-6xl font-medium font-cormorant-garamond`}>Documentation</h1>
                            <p className={`text-3xl font-n max-w-[500px] pb-6`}>Find examples, integration guides and other ways of working with Qi.</p>
                            <div className={`text-black font-bold text--italic font-cormorant-garamond text-2xl`}>
                                explore docs
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full mt-24 lg:px-6`}>
                <div className="w-full md:flex items-top justify-between max-w-[1480px] mx-auto px-6 md:px-6 lg:px-0 ">

                    <div className={`md:max-w-[300px] w-full`}>
                        <p className={`font-cormorant-garamond text-black text-3xl font-semibold `}>
                            Integrated crypto payments
                        </p>
                        <ul className={`text-2xl mt-5 px-0 space-y-3 font-semibold text-[#566bd4] list-none`}>
                            <li>Use cases</li>
                            <li>Synergy API</li>
                            <li>Knowledgeable</li>
                            <li>Blockchain testnets</li>
                        </ul>
                    </div>

                    <div className={`md:max-w-[300px] w-full`}>
                        <p className={`font-cormorant-garamond text-black text-3xl font-semibold `}>
                            Hosted Crypto Gateway
                        </p>
                        <ul className={`text-2xl mt-5 px-0 space-y-3 font-semibold text-[#566bd4] list-none`}>
                            <li>Overview</li>
                            <li>Start guide</li>
                            <li>Smart API</li>
                            <li>Web3 connectivity</li>
                            <li>Reporting</li>
                        </ul>
                    </div>

                    <div className={`md:max-w-[300px] w-full`}>
                        <p className={`font-cormorant-garamond text-black text-3xl font-semibold `}>
                            Lighting as a service
                        </p>
                        <ul className={`text-2xl mt-5 px-0 space-y-3 font-semibold text-[#566bd4] list-none`}>
                            <li>Bolt API</li>
                            <li>Use cases</li>
                            <li>Faster Payments</li>
                            <li>Payment channels</li>
                            <li>Loop & settlements</li>
                        </ul>
                    </div>
                </div>
            </div>
            <main>

            </main>
        </Layout>
    );
}
