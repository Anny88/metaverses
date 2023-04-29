'use client';
import styles from "../styles";
import { motion } from "framer-motion";
import { planetVariants, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import { TitleText } from "../components";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} id="get-started">
    <motion.div variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{ once: false, amount: 0.25 }}
     className={`${styles.innerWidth} mx-auto flex lg:flex-row  flex-col gap-8`}
     >
        <motion.div 
      variants={planetVariants("left")}
      className={`${styles.innerWidth} mx-auto`}
     >
      <img src="/get-started.png" alt="get-started" className="h-[600px] w-[600px] object-contain" />
     
    </motion.div>
    
    <div> 
      <TypingText title="| How metaversus work"/>
      <TitleText title="Get started with just a few clicks" /> 
      <div className="flex items-center gap-8 mt-10">
        <div className={`${styles.flexCenter} bg-[#323f5d] rounded-md w-[70px] h-[70px] gap-8`}>
          <p className="font-bold text-[20px] text-white">01</p>
        </div>
        <div className="text-white">Find a world that suits you and you want to enter</div>
      </div>
      <div className="flex items-center gap-8 mt-10">
        <div className={`${styles.flexCenter} bg-[#323f5d] rounded-md w-[70px] h-[70px] gap-8`}>
          <p className="font-bold text-[20px] text-white">02</p>
        </div>
        <div className="text-white">Enter the world by reading basmalah to be safe</div>
      </div>
    </div>
    </motion.div>

  </section>
);

export default GetStarted;
