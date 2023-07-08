import Head from 'next/head';

const CHead = ({title}) => {
    return (
        <>
            <Head>
                <title>{title} | TechLion Dev's Link DeShortener</title>
            </Head>
        </>
    );
}

export default CHead;