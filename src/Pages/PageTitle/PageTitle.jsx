import React from 'react';
// import { Helmet } from 'react-helmet';
import {Helmet, HelmetProvider } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <HelmetProvider>
        <Helmet>
           <title>{title}</title>
        </Helmet>
        </HelmetProvider>

    );
};

export default PageTitle;