import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim();
        setTimeout(()=>{document.body.style.overflowY = "scroll";},4500)
      }, []);
      return (
        <div className="preloader">
          <div className="texts-container">
            <span>Let's</span>
            <span>Discuss</span>
            <span>Design</span>
            <span>Develop</span>
            <span>&</span>
            <span>Deploy</span>
          </div>
        </div>
      );
}

export default Preloader