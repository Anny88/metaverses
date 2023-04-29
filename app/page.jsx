import { Suspense } from "react";
import Image from 'next/image'
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

async function getSongs() {
  const res = await fetch('https://itunes.apple.com/search?term=radiohead');

  return res.json();
}

const Page = async () => {
  const songs = await getSongs();

  console.log(songs);
  return (<div className='bg-primary-black overflow-hidden h-full w-full'>
    <About />
</div>);
}


export default Page;
