'use client';

import Link from 'next/link';
import { motion } from "framer-motion";

import  styles from '../styles';
import { navVariants } from '../utils/motion';
 
const Navbar = () => (
  <motion.nav 
    className={`${styles.xPaddings} py-8 relative`}
    initial="hidden"  
    variants={navVariants} 
    whileInView="show" 
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img alt="search" className="w-[24px] h-[24px] object-contain" src="/search.svg" />
      <h2 className="font-extrabol text-[24px] leading-[30px] text-white">METAVERSES</h2>
      <Link href="/bored">Bored?</Link>
      <img alt="menu" className="w-[24px] h-[24px] object-contain"  src="/menu.svg"/>
    </div>
  </motion.nav>
);  

export default Navbar;
