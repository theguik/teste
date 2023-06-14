import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import article1 from "../../public/images/articles/damadalei.jpg";
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedArticle = ({img, title, time, summary, link}) =>{

    return(
        <li className='col-span-2 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative
        dark:border-light dark:bg-dark dark:text-light 
        '>
             <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light
            
            '/>    
                <FramerImage src={img} alt={title} className='w-full h-full snap-center' whileHover={{scale:1.05}}
                transition={{duration:0.2}} priority         
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

        </li>
    )

}

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){

        imgRef.current.style.display ="inline-block";
        x.set(event.pageX);
        y.set(-10);

    }

    function handleMouseLeave(event){

        imgRef.current.style.display ="none";
        x.set(0);
        y.set(0);

    }

    return(

        <Link href={link} target='_blank' 
        
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}

        >
        <h2 className='capitalize text-xl font-semibold hover:underline'>
            {title}
        </h2>
        <FramerImage 

        style={{ x:x , y:y}}
        initial={{opacity: 0}}
        whileInView={{opacity:2, transition:{duration: 0.2}}}

        ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
        </Link>

    )
}

const articles = () => {
  return (
    <>
    <Head>
        <title>Fotos</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Nossas melhores memórias" className='mb-16 lg:!text-7l sm:mb-8 sm:!text-6xl xs:!text4xl'/>
            <ul className='grid grid-cols-2 pb-12 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                <FeaturedArticle 
                img={article1} />

           </ul>
            
            
        </Layout>
    </main>
    </>
  )
}

export default articles