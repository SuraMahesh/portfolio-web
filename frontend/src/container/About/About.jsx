import React, {useState, useEffect} from 'react';
import './About.scss';
import {motion} from 'framer-motion'
import { images } from '../../constants'

const about = [
  {title: 'Web Development:', description: 'web development', imgUrl: images.marketplace},
  {title: 'NFT Marketplace:', description: 'web development', imgUrl: images.marketplace},
  {title: 'Web Development:', description: 'web development', imgUrl: images.marketplace}
]

const About = () => {
  return (
    
    <>
      {/* <h2 className='head-text'>
        I Know that
        <span>

        </span>
        <span>

        </span>
      </h2> */}
      <div className='app__profiles'>
        {about.map((about, index) => (
          <motion.dev
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.text}</h2>
            <h2 className='p-text' style={{ marginTop: 10}}>{about.description}</h2>
          </motion.dev>
        ))}
      </div>
    </>
  )
}

export default About