import React from 'react';
import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "GovenAgent"}

                </title>
                <link
                    href="https://fonts.bunny.net/css?family=chivo:700|manrope:400,500,700,800|shippori-mincho:700,800"
                    rel="stylesheet"
                />
                <meta name="robots" content="noindex,nofollow" />
            </Head>
        </>
    );
};

export default PageHead;