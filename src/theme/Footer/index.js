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
      <div className={`w-full lg:px-6 pt-2`}>
        <div className="w-full md:flex md:h-[120px] items-center justify-between max-w-[1480px] mx-auto px-6 md:px-6 lg:px-0 custom-footer">
            <p className={`font-semibold text-lg`}>@ 2023 Qi DIgital</p>
            <p className={`font-semibold text-lg`}>Need additional support? <a className={`font-semibold`} href='mailto:connect@qidigital.com'>connect@qidigital.com</a></p>
        </div>
    </div>
  );
}
export default React.memo(Footer);
