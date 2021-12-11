import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import styles from '../styles/Home.module.css'
import {MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid'
import { SearchIcon} from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter()
  const search = e => {
    e.preventDefault();  
    const term = searchInputRef.current.value
    if(!term) return;

    router.push(`/search?term=${term}`)

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Clone Using Nextjs" />
        <link rel="icon" href="https://img.icons8.com/fluency/50/000000/google-logo.png" />
      </Head>

      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">

        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
          
          <Avatar url="/Narottam-Profile.jpeg"/>
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5" >
        <Image
          src="/google.jpg"
          height={95}
          width={304}
          alt="google image"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow"/>
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search}  className="btn">Google Search</button>
          <button onClick={search} className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>
      {/* footer */}
      <Footer/>

    </div>
  )
}
