import { Suspense } from "react";
import Image from 'next/image'
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import { Bored } from './Bored';
import { Songs } from "./Songs";

async function getSongs() {
  const res = await fetch('https://itunes.apple.com/search?term=radiohead');

  return res.json();
}

const Page = async () => {
  const songs = await getSongs();

  console.log(songs);
  return (<div className='bg-primary-black overflow-hidden h-full w-full'>
  
   
  {/* <Suspense fallback={<h2 className="text-white">Loading feed...</h2>}>
    <Bored />
  </Suspense>
   */}
  <div className="w-full h-50 flex">
    <Suspense fallback={<h2 className="text-white">Loading actions when you are bored...</h2>}>
        <Bored />
    </Suspense>
  </div>
  <div className="w-full h-50 flex">
    <Suspense fallback={<h2 className="text-white">Loading songs...</h2>}>
        <Songs />
    </Suspense>
  </div>
</div>);
}


export default Page;
