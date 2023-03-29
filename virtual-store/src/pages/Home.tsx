import {useState, useEffect, useRef} from 'react'
import styles from './Home.module.css'

import image from '../images/image.png'
import image1 from '../images/image1.png'

import { motion } from 'framer-motion'

const images = [image, image1]

function Home () {
const carousel = useRef<any | null>(null);;
const [width, setWidth] = useState(0)

useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
}, [])


    return (    
        <div className={styles.home}>
            <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor: "grabbing"}}>
                <motion.div 
                className={styles.inner}
                drag="x"
                dragConstraints={{right: 0, left:-width}}
                initial={{ x: 100 }}
                animate={{ x:0 }}
                transition={{ duration: 0.8 }}
                >

                    {images.map(image => (
                        <motion.div className={styles.item} key={image}>
                            <img src = {image} alt="carrossel"/>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Home