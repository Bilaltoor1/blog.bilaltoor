import React from 'react';
import {motion} from "framer-motion";

function ScrollProgress({scrollYProgress}) {
    return (
        <figure className="hidden xl:block progress">
            <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="indicator"
                    style={{ pathLength: scrollYProgress }}
                />
            </svg>
        </figure>
    );
}

export default ScrollProgress;