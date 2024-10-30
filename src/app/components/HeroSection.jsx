"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';


const HeroSection = () => {
  return (
        <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-pink-500 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-400">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
                    <TypeAnimation
                        sequence={[
                            'Ananya Gollapalli',
                            2500,
                            'Goal-Oriented',
                            1000,
                            'A Team Player',
                            1000,
                            'Proactive',
                            1000,
                            'Innovative',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-[#5b5f62] mb-6 text-base sm:text-lg lg:text-xl'>
                    Passionate B.Tech student majoring in Computer Science Engineering at Dayananda Sagar University. Focused on crafting innovative product solutions and advancing the frontiers of technology through creative design.
                </p>
                <div>
                <Link href="#contact">
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br to-pink-500 via-rose-300 from-pink-500 hover:bg-rose-500 text-white text-xl'>Hire Me</button></Link>
                <Link href="Sri Vishnavi Ananya Gollapalli Resume.pdf"><button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br to-pink-500 via-rose-300 from-pink-500 hover:bg-pink-100 text-black mt-4'>
                    <span className='block bg-[#ffffff] rounded-full hover:bg-pink-200 px-5 py-2'>Download CV</span>
                    </button></Link>
                </div>
                </motion.div>
            
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#fdd9d9] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Hero_Image_Ananya-removebg.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
