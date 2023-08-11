import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className={`w-full`}>
            <div className="max-w-[1480px] mx-auto">

                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Docusaurus Tutorial - 5min ⏱️
                        </Link>
                    </div>

            </div>
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
            <div className={`w-full`}>
                <div className="max-w-[1480px] mx-auto">
                    <div className={`flex items-center justify-center`}>
                        <div className={`w-1/2 `}>
                            <h1 className={`text-6xl font-normal`}>Qi DIgital Documentation</h1>
                            <p className={`text-3xl font-n`}>Explore our guides and examples</p>
                            <p className={`text-xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nunc a tortor lobortis posuere. Aliquam posuere massa ac velit pellentesque, </p>
                            <button class="btn rounded-md border-0 p-2 bg-[#920963] text-white btn-blue">
                                Get started Bolt
                            </button>

                        </div>
                        <div className={`w-1/2`}>
                            <img src={`img/crypto-hero-1.png`} />
                        </div>
                    </div>
                </div>
            </div>
            <main>

            </main>
        </Layout>
    );
}
