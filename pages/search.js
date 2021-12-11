import Head from 'next/head'
import Header from '../components/Header'
import { Router, useRouter } from 'next/router'
import Response from '../Response'
import SearchResults from '../components/SearchResults'

function Search({results}) {
    // console.log(results)
    const router = useRouter()
    return (
        <div>
            <Head>
            <title>{router.query.term} - Google Search</title>
            <meta name="description" content="Google Clone Using Nextjs" />
            <link rel="icon" href="https://img.icons8.com/fluency/50/000000/google-logo.png" />
            </Head>
            {/* Header */}
            <Header/>
            {/* Search Results */}
            <SearchResults results={results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const API_KEY  = process.env.API_KEY
    const CONTEXT_KEY = process.env.CONTEXT_KEY
    const useDummyData = false;
    const startIndex = context.query.start || "0"
    const data = useDummyData? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then(response => response.json())

    // pass the result to the client
    return {
        props:{
            results:data,
        }
    }
}
