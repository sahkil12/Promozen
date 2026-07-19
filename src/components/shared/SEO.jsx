import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
     const siteName = "Promozen"; 

     return (
         <Helmet>
               <title>{siteName} | {title}</title>
               {description && (
                    <meta name="description" content={description} />
               )}
               {keywords && (
                    <meta name="keywords" content={keywords} />
               )}
               {/* Open Graph for social media */}
               <meta property="og:title" content={`${siteName} | ${title}`} />
               {description && (
                    <meta property="og:description" content={description} />
               )}
          </Helmet>
     );
};

export default SEO;