import Head from 'next/head'
import MenuVertical from "../chunks/menu-vertical";

export default function FullLayout({children}) {

    return (
        <div>
            <Head>
                <title>Callaba API Dashboard</title>
            </Head>
            <main>
                <div className={'full-layout-menu-top'}>

                </div>
                <div className={'full-layout-menu-left'}>
                    <MenuVertical/>
                </div>
                <div className={'fill-layout-content'}>
                    {children}
                </div>
            </main>
        </div>
    )
}
