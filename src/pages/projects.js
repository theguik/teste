import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/musica.png";
import project2 from "../../public/images/projects/musica2.png";
import project3 from "../../public/images/projects/musica3.png";
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect';
 

const FramerImage = motion(Image);
 

const FeaturedProject =({type, title, summary, img, link, music}) =>{
    return(
        <article className='w-full flex items-center justify-between rounded-2xl
        border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />

            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}}
                transition={{duration:0.2}} priority         
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                  {type}  
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        
              
                  <audio className='w-full h-20' controls loop>
                <source src={music} type="audio/mp4"/> Seu navegador não possui suporte ao elemento audio
                </audio>
                </div>

        </article>
    )
}

const Project =({title, type, img, link, github}) => {
    return(
        <>
        <article className='w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light 
        xs:p-4
        
        '>
        <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
            rounded-br-3xl md:-right-2 md:w-[101%] xs:w-[102%] xs:rounded-[1.5rem]'/>    
        <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}}
                transition={{duration:0.2}} priority         
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                  {type}  
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>

                <div className=' w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank' 
                className='rounded-lg bg-light text-dark border border-solid 
                border-dark p-2 px-6 text-lg font-semibold
                 hover:bg-dark hover:text-light
                 dark:text-dark dark:bg-light dark:border-light  dark:hover:bg-dark dark:hover:text-light
                    md:text-base
                 '> Visite</Link>
                <Link href={github} target='_blank' className='w-8 md:w-6'> <GithubIcon /></Link>
                
                </div>
            </div>
        </article>
        
        </>
    )

}

const projects = () => {
  return (
    <>
    <Head>
        <title>Musicas</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center jusitfy-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText 
            text="minha maior inspiração" 
            className='mb-16 lg:!text-7l sm:mb-8 sm:!text-6xl xs:!text4xl'/>
    
        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-x-24 sm:gap-x-0'>
            
            <div className='col-span-12'>
            <FeaturedProject
                title="Dama da Lei"
                img={project1}
                summary=" Resolvi Colocar alguns projetos de músicas feitos por mim enquanto não tenho projetos o suficiente para apresentar. "
                link="https://www.youtube.com/watch?v=3HeWBUNVI_0"
                music = "damadalei.mp3"
                 />

                

            </div>
           
            <div className='col-span-12'>
            <FeaturedProject
                 title="Esperando às 18h"
                img={project2}
                summary=" Resolvi Colocar alguns projetos de músicas feitos por mim enquanto não tenho projetos o suficiente para apresentar. "
                link="https://www.youtube.com/watch?v=3HeWBUNVI_0"
                music = "esperando-as-18.mp3"
                 />
            </div>

              <div className='col-span-12'>
            <FeaturedProject
              title="Namora comigo?"
                img={project3}
                summary=" Resolvi Colocar alguns projetos de músicas feitos por mim enquanto não tenho projetos o suficiente para apresentar. "
                link="https://www.youtube.com/watch?v=3HeWBUNVI_0"
                music = "natalie2.mp3"
                 />
            </div>

            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects