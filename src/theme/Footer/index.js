import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';

function Footer() {
    const {footer} = useThemeConfig();
    if (!footer) {
        return null;
    }
    const {copyright, links, logo, style} = footer;
    return (
        <div className={`w-full`}>
            <div className="custom-site-wrapper custom-footer text-xl justify-between md:items-center items-top py-3 pt-10 md:flex md:h-[100px]">
                <p className={`font-semibold  `}>@ 2023 Qi DIgital</p>
                <p className={`font-semibold `}>Need additional support? <a className={`font-semibold`}
                                                                                   href='mailto:connect@qidigital.com'>connect@qidigital.com</a>
                </p>
            </div>
        </div>
    );
}

export default React.memo(Footer);
