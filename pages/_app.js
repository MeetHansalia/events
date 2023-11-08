import Layout from '@/components/layout/layout'
import '../styles/global.css'

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default MyApp