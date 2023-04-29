'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, TitleText, ExploreCard } from "../components";
import { exploreWorlds } from '../constants';
import styles from "../styles";

async function getData() {
  const res = await fetch('https://www.boredapi.com/api/activity');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Explore = () => {
  const [active, setActive] = useState("world-2");
  
  return(
  <section className={styles.paddings} id="explore">
    <motion.div variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{ once: false, amount: 0.25 }}
     className={`${styles.innerWidth} mx-auto flex flex-col`}
     >
      <TypingText title="| The World" textStyles="text-center" />
      <TitleText title={<>Choose the world you want <br class-name="md:block-hidden"  /> </>} textStyles="text-center"/>
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {exploreWorlds.map((world, idx) => (
        <ExploreCard 
          key={world.id}
          {...world}
          index={idx}
          active={active}
          handleClick={setActive}
        />
        ))}
      </div>
    </motion.div>
  </section>
);
}
export default Explore;