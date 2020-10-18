import Head from 'next/head'
import Default from '../../components/layouts/default'

export default function Home() {
    return (
        <Default home={false}>
            <div>
                srt listing
            </div>
        </Default>
    )
}
