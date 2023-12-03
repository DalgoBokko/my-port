import React, { useEffect, useRef } from "react";

import { designText } from "../constants";
import { gsap } from "gsap";//npm i gsap 설치를 꼭 하도록!!
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Design = () => {
  
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: horizontal,
            start: "top 56px",
            end: () => "+=" + horizontal.offsetWidth,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            },
        });
    
        return () => {
            scrollTween.kill();
        };
    }, []);

  return (
    <section id="design" ref={horizontalRef}>
      <div className="des__inner">
        <div className="des__title">
          DESIGN <em>디자인작업</em>
        </div>
        <div className="des__wrap">
        {designText.map((des, key) => (
          <article
            className={`des__item p${key + 1}`} 
            key={key} 
            ref={(el) => (sectionsRef.current[key] = el)
            }
          >           
            <span className="img no-scroll">
              <img src={des.img} alt={des.name} />
            </span>
            <span className="des__tit">{des.tit}</span>
          </article>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Design