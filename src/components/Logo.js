import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion';
import LogoPIC from '../../public/images/profile/logo.png';
import Image from 'next/image'

const MotionLink = motion(Link);

const Logo = () => {
    return (
       <div className='flex items-center justify-center mt-2'>
     <MotionLink href="/" > <Image src={LogoPIC} alt="logo" className='w-20 h-20 flex items-center justify-center' priority /> </MotionLink>
     </div>
       

    )
}
export default Logo 