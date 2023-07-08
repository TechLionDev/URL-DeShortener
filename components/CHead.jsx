import Head from 'next/head';

const CHead = ({title}) => {
    return (
        <>
            <Head>
                <title>{title} | TechLion Dev&apos;s Link DeShortener</title>
            </Head>
        </>
    );
}

export default CHead;