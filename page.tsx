"use client"
import Image from "next/image";
import pp from'..\public\public\pp.png'
import ThemeToggle from '../components/ui/theme-toggle';
import {motion} from 'framer-motion'
import {Button} from "@/components/ui/button"
import Link from 'next/link'
import { FaGithub,  } from "react-icons/fa";
import {Card,CardContent} from "@/components/ui/card"


export default function Home () {
  return(
    <div className="min-h-screen  bg-white  dark:bg-black text-black dark:text-white 
    transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py 20">

        <motion.header
        initial ={{opacity:0 , x:-100}}
        animate ={{opacity:1,x:0}}
        transition={{opacity :0.8}} 
        
        className="flex item-center justify-between  mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src ={pp} alt="profole picture" className="cursor pointer 
            transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle/>
        </motion.header>
        <main className="space-y-10">

          <section className="space-y-10">
          <motion.div
          initial ={{opacity:0 , x:100}}
          animate ={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="space-y-1"
          >
            <h1 className="text-4x1 font- bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text-transperent inline-block">silvia.dev</h1>
            <p className="text-grey-600 dark:text-grey-400 ">Web Developer</p>
            <p className="text-grey-600 dark:text-grey-400">Full-Stack</p>
            </motion.div>

            <motion.div
            initial ={{opacity:0 , x:-100}}
            animate ={{opacity:1,x:0}}
            transition={{duration:0.8}}
            className="space-y-3">
              <h2 className="text-grey-600 text-sm dark:text-greu-400 max-w2x1">Creating Fun Websites</h2>
              <p>I am passionate about building simple creative and scalable websites for business , that are user friendly.</p>
            </motion.div>

            <motion.div
            initial ={{opacity:0 , x:50}}
            animate ={{opacity:1,x:0}}
            transition={{duration :0.8}}
            className="flex items-center" gap-3

            >
              <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transiton-transform hover:scale-105">Resume</Button>
              <Link href="#" className="text-grey-600 dark:text-grey-400 hover:text-black dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6"></FaGithub>

                </Link>
                
                
            </motion.div>
          


          </section>

          



          
        </main>
      </div>
    </div>  
  );
}