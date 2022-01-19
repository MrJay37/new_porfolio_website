import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SkillItem({ title, value, count }) {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    const [animated, setAnimated] = useState(false) 

    useEffect(() => {
        if (inView && !animated) {
          controls.start('visible');
          setAnimated(true)
        }
      }, [controls, inView]);

    return <dd className="entry">
        <span className='label'>
            {title}
        </span>
        <div className="barContainer">
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                'hidden': {'height': 0},
                'visible': {'height': `${value*100}%`},
            }}
            transition={{ delay: count/10 }}
            className={`percentage`}
        />
        </div>
        
    </dd>
}