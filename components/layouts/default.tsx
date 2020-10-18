import Head from 'next/head'
import Link from 'next/link'

export default function Default({children, home}) {

    return (
        <div>
            <Head>
                <title>Callaba API Dashboard</title>
            </Head>
            <main>{children}</main>
        </div>
    )
}
