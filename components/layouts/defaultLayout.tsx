import Head from 'next/head'

export default function DefaultLayout({children, home}) {

    return (
        <div>
            <Head>
                <title>Callaba API Dashboard</title>
            </Head>
            <main>{children}</main>
        </div>
    )
}
